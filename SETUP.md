# Keeping the kill data running

The Recorded numbers on the matchups page come from the Albion kill feed. That
feed only holds about the last half hour, so something has to read it on a
schedule or those fights are gone for good. Nothing collected is ever thrown
away: `kills.json` only adds to its counts, and on GitHub it is committed on
every run, so the record builds up in the repo permanently.

## Right now

A cron job on this Mac runs it every 20 minutes. Check it with:

    crontab -l
    tail collector.log

That only collects while the Mac is awake and online. The steps below move it
to GitHub so it runs without you.

## Move it to GitHub

1. Make the repo, from this folder:

       git init
       git add -A
       git commit -m "Albion Meta"

2. Create it on GitHub and push:

       gh repo create albion-meta --public --source=. --push

   No `gh`? Make an empty repo on github.com, then:

       git remote add origin https://github.com/YOURNAME/albion-meta.git
       git branch -M main
       git push -u origin main

3. On the repo, open **Actions** and enable workflows.
   `.github/workflows/collect.yml` is already there and runs every 15 minutes.

4. Nothing to change under **Settings > Actions > General**. The workflow asks
   for write access itself (`permissions: contents: write`), which is enough
   even while the repo default is Read only.

5. Stop the copy on this Mac, so only one collector is banking data:

       crontab -r

   Two collectors is not harmful, each skips event ids it has already seen, but
   the two `kills.json` files never merge, so the counts end up split.

## Putting the site on Cloudflare Pages

The site is plain files, so there is no build step.

1. Cloudflare dashboard > **Workers & Pages** > **Create** > **Pages** >
   **Connect to Git**, pick the `albion-meta` repo.

2. Build settings:

   - Framework preset: **None**
   - Build command: **leave empty**
   - Build output directory: **/**

   Deploy. `functions/api/winrates.js` is picked up automatically and serves
   `/api/winrates`.

3. **Custom domains** > add `hellgatemeta.com` and `www.hellgatemeta.com`. If the
   domain is on Cloudflare already the DNS records are written for you.

4. **Web Analytics**: Cloudflare dashboard > **Analytics & Logs** >
   **Web Analytics** > **Add a site** > pick the Pages project. Choose the
   automatic setup so Cloudflare injects the beacon; there is nothing to paste
   into the HTML. It is cookieless, and `privacy.html` and `cookies.html`
   already describe it.

5. Check the deploy:

       curl -sI https://hellgatemeta.com/ | grep -i -E 'cf-cache|content-security'
       curl -s  https://hellgatemeta.com/api/winrates | head -c 200

   The second should return JSON with a `kills` field.

### Builds stay under the free 500 a month

The collector commits every 15 minutes, which on its own is about 2,900 commits
a month. Its commit message ends in `[CI Skip]`, which Cloudflare Pages reads and
skips the build. Only the commits you push yourself build the site. After the
first data commit lands, open the Pages project and confirm that deploy was
skipped rather than built.

The data still updates without a build: the page asks `/api/winrates`, and that
function reads the latest `winrates.js` straight from GitHub and caches it at the
edge for five minutes.

## Running it by hand

    python3 collect-winrates.py

Safe any time. Event ids are remembered, so nothing is counted twice.

## What it can and cannot see

The API never says a kill happened in a hellgate. A kill is counted when it has
one assist, both players are under 1350 item power, and both are holding a
weapon this site lists. That is the shape of a 2v2, not a hellgate flag, so a
low gear open world duo fight is counted too.

**The past cannot be fetched.** The global feed pages back about a thousand
kills, roughly half an hour, then stops. Per player the API returns ten kills
only. The third party archives that do keep history sit behind Cloudflare and
refuse automated requests. So the record starts when the collector starts, and
thirty days of data means thirty days of running.
