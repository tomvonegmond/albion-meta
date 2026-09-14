/**
 * Albion Meta - the recorded kill counts, served from this domain.
 *
 * The page used to fetch this straight from raw.githubusercontent.com, which
 * is not a CDN and rate limits once there is real traffic. This sits in front
 * of it instead: Cloudflare's edge caches the answer for five minutes, so a
 * thousand readers cost one request upstream, and the numbers are never more
 * than five minutes behind the collector, which only runs every fifteen.
 *
 * Cloudflare Pages Functions. It needs no configuration and no secrets.
 */
const SOURCE = "https://raw.githubusercontent.com/tomvonegmond/albion-meta/main/winrates.js";
const EDGE_TTL = 300;      // seconds Cloudflare keeps it
const BROWSER_TTL = 120;   // seconds the reader's browser keeps it

export async function onRequest(context) {
  const cache = caches.default;
  const key = new Request(new URL(context.request.url).origin + "/api/winrates", context.request);

  let hit = await cache.match(key);
  if (hit) return hit;

  let upstream;
  try {
    upstream = await fetch(SOURCE, { cf: { cacheTtl: EDGE_TTL, cacheEverything: true } });
  } catch (e) {
    return json({ error: "upstream unreachable" }, 502);
  }
  if (!upstream.ok) return json({ error: "upstream " + upstream.status }, 502);

  const text = await upstream.text();
  const body = text.split("window.ALBION_WINRATES = ")[1];
  if (!body) return json({ error: "unexpected file shape" }, 502);

  let data;
  try {
    data = JSON.parse(body.replace(/;\s*$/, ""));
  } catch (e) {
    return json({ error: "could not parse" }, 502);
  }

  const response = json(data, 200);
  context.waitUntil(cache.put(key, response.clone()));
  return response;
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=${BROWSER_TTL}, s-maxage=${EDGE_TTL}`,
      "access-control-allow-origin": "*",
    },
  });
}
