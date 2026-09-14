#!/usr/bin/env python3
"""
Albion Meta - a local server that routes the way Cloudflare Pages does.

python3 -m http.server is not close enough any more. Pages serves /matchups
from matchups.html, permanently redirects /matchups.html to /matchups, and
answers anything it cannot find with 404.html and a real 404 status. Testing
against a plain file server hides broken links and hides the 404 page.

    python3 dev-server.py [port]

Development only. Nothing here runs on the live site.
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent


class PagesHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = unquote(urlparse(self.path).path)

        # /matchups.html -> /matchups, the redirect Pages sends
        if path.endswith(".html") and path != "/index.html":
            clean = path[: -len(".html")]
            self.send_response(308)
            self.send_header("Location", clean)
            self.end_headers()
            return None
        if path == "/index.html":
            self.send_response(308)
            self.send_header("Location", "/")
            self.end_headers()
            return None

        # /matchups -> matchups.html
        if path not in ("/", "") and not Path(ROOT / path.lstrip("/")).is_file():
            candidate = ROOT / (path.lstrip("/") + ".html")
            if candidate.is_file():
                self.path = path + ".html"
                return super().send_head()

            # anything else is genuinely missing
            body = (ROOT / "404.html").read_bytes()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return None

        return super().send_head()

    def log_message(self, fmt, *args):
        sys.stderr.write("  %s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    handler = partial(PagesHandler, directory=str(ROOT))
    print(f"Albion Meta on http://localhost:{port}  (routing like Cloudflare Pages)")
    ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()
