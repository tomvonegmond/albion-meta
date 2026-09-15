#!/usr/bin/env python3
"""
Albion Meta - stamp the css and js links with a content hash.

Cloudflare's zone level Browser Cache TTL rewrites the cache headers on .js
and .css, because they are on its default cached-extensions list. Asking for
max-age=0 in _headers does not survive it: the zone sends max-age=14400 on
every response, straight from origin, cached or not. So readers keep a whole
afternoon's stale builds.js and a change looks like it never went live.

Headers cannot fix that from this side, so the url does instead. Every local
stylesheet and script is linked as name.js?v=<hash of its contents>. Change the
file and the link changes with it, so a cached copy under the old url simply is
not asked for. The html carries the links and is never cached, Cloudflare does
not cache html by default, so the new urls reach readers immediately.

Run it after changing any css or js, before committing:

    python3 stamp-assets.py

It is idempotent, and it prints only what actually moved.
"""
import hashlib, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent

# winrates.js is written by the collector every fifteen minutes without the
# site being rebuilt, so a stamp on it would be stale the moment it is set.
# It is only the fallback anyway, the live numbers come from /api/winrates.
SKIP = {"winrates.js"}

LINK = re.compile(r'(?P<attr>\b(?:src|href))="(?P<file>[A-Za-z0-9._/-]+\.(?:js|css))(?:\?v=[0-9a-f]+)?"')


def stamp(name):
    f = HERE / name
    if not f.is_file():
        return None
    return hashlib.sha256(f.read_bytes()).hexdigest()[:8]


def main():
    check_only = "--check" in sys.argv
    changed = 0
    for page in sorted(HERE.glob("*.html")):
        before = page.read_text()

        def sub(m):
            name = m.group("file")
            if name in SKIP:
                return f'{m.group("attr")}="{name}"'
            h = stamp(name)
            if h is None:
                return m.group(0)
            return f'{m.group("attr")}="{name}?v={h}"'

        after = LINK.sub(sub, before)
        if after != before:
            if not check_only:
                page.write_text(after)
            changed += 1
            print(f"  {page.name}")
    print((f"{changed} page(s) need restamping" if check_only else f"{changed} page(s) restamped")
          if changed else "everything already current")
    return 0


if __name__ == "__main__":
    sys.exit(main())
