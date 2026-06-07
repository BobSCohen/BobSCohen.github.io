# Bob Stillman Website — Project Handoff

*Prepared for Bob Cohen (stage name: Bob Stillman) to take over the project.*

---

## 1. What this is

A promotional website covering your three areas of work — **actor, voice teacher, and songwriter** — including your credits, the album *Come Down Angel* with live streaming players, and space for performance clips and testimonials. It's a fast, static website (plain HTML/CSS/JavaScript, no database or server software), which is why it can be hosted for free.

- **Live site:** https://bobstillman.com
- **Also reachable at:** https://bobscohen.github.io (this automatically redirects to bobstillman.com)

---

## 2. Where it lives and how it's hosted

There are three separate pieces. Knowing which is which will save confusion later.

| Piece | Where | What it does |
|---|---|---|
| **The files (the website itself)** | GitHub repository: `github.com/BobSCohen/BobSCohen.github.io` | The actual pages and assets |
| **The hosting** | GitHub Pages (free) | Serves the files to visitors |
| **The domain name** | GoDaddy | Registers `bobstillman.com` and points it at GitHub |

How they connect: the files live in the GitHub repository. GitHub Pages publishes whatever is in that repository. GoDaddy's DNS settings tell the internet that `bobstillman.com` should load from GitHub. Editing the files in the repository updates the live site within about a minute.

---

## 3. Access you'll need

To take over fully, you'll need control of two accounts:

1. **The GitHub account** (`BobSCohen`) that holds the website files. If this account was created for you, you just need the login. Otherwise, you can be added as a collaborator under the repository's **Settings → Collaborators**, or the account can be handed over to you.
2. **The GoDaddy account** that holds `bobstillman.com`, so you can renew the domain and manage its DNS settings.

Keep the login details for both somewhere safe — losing access to either one is the main thing that can put the site at risk.

---

## 4. Site structure

Five pages, reached through the menu (the "hamburger" button at the top right opens it):

| Page | File | Contents |
|---|---|---|
| Home | `index.html` | Headshot, the three crafts, short bio, key facts |
| Actor | `actor.html` | Stage & screen credits, Video clips, Images |
| Voice Teacher | `voice-teacher.html` | Teaching approach, what you offer, Testimonials |
| Songwriter | `songwriter.html` | *Come Down Angel* players, tracklist, streaming links, Audio |
| Contact | `contact.html` | Contact form and direct email |

Supporting folders in the repository:

- `css/style.css` — all design (colors, fonts, layout). Edit here to change the look.
- `js/main.js` — the menu and small scroll animations.
- `images/` — photos (your headshot, `bob-headshot.webp`, is here).
- `audio/` — song files (for the Songwriter page).
- `video/` — self-hosted video, if you ever use it instead of YouTube/Vimeo.

---

## 5. What's already done vs. what's left to fill in

**Done and verified** (drawn from public sources):

- Your biography and credits — two Tony nominations, the Drama Desk nomination, Juilliard/Princeton training, and the Broadway, Off-Broadway, regional, and screen credits.
- *Come Down Angel* — working embedded Spotify and Apple Music players, the full 13-track listing, and streaming links.

**Still to add** — every spot below is clearly marked in the files with bracketed `[ ... ]` text and `REPLACE` comments:

- A short **teaching-philosophy paragraph** in your own words (`voice-teacher.html`).
- Real **student testimonials** with names (`voice-teacher.html`). *Note: these were intentionally left as placeholders rather than invented.*
- **Performance video clips** — YouTube or Vimeo embeds (`actor.html`).
- **Audio clips** — drop `.mp3` files into `audio/` and link them (`songwriter.html`).
- **Production / press photos** — add to `images/` and place on `actor.html`.
- A **real contact email** — the site currently uses the placeholder `hello@bobstillman.com`. Replace it everywhere (it appears on the Contact page, the menu, and the footer).
- **YouTube and Instagram links** — currently placeholders in the footer and Contact page.
- The **contact form** — it's wired to send mail through a free service called Formspree. Create a form at formspree.io and replace `YOUR_FORM_ID` in `contact.html`. Until then, the direct email link works.
- A **higher-resolution headshot** — see the note in section 7.

---

## 6. How to edit the site

Two ways, both fine:

**Easiest — edit in the browser on GitHub:**
1. Go to `github.com/BobSCohen/BobSCohen.github.io`.
2. Click the file you want to change (e.g. `contact.html`).
3. Click the pencil (edit) icon, make your change, and click **Commit changes**.
4. The live site updates in about a minute.

**For larger changes — work on your computer:**
1. Install Git, then `git clone https://github.com/BobSCohen/BobSCohen.github.io.git`.
2. Edit the files locally.
3. `git add .` then `git commit -m "describe your change"` then `git push`.

**Important caveat for both:** browsers cache websites aggressively. After an edit goes live, if you don't see the change, do a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac) or open the site in a private/incognito window.

---

## 7. Technical reference (for whoever maintains it)

**Custom domain setup (already configured — listed here in case it ever needs rebuilding):**

- A `CNAME` file in the repository root contains `bobstillman.com`. Don't delete it — it's what binds the domain to the site.
- In GitHub: **Settings → Pages** shows the custom domain and an "Enforce HTTPS" checkbox (should stay ticked).
- In GoDaddy DNS (Domain Portfolio → select the domain → DNS / Manage DNS), the records are:
  - Four **A records**, Name `@`, pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - One **CNAME record**, Name `www`, Value `bobscohen.github.io`
- DNS changes can take up to 24–48 hours to propagate.

**Design notes:**

- The look is a warm "darkened stage" theme — deep ink background, cream text, antique-brass accents — meant to feel theatrical and refined.
- Fonts are *Fraunces* (the serif headings) and *Hanken Grotesk* (body text), loaded free from Google Fonts.
- All of it is controlled in `css/style.css`. The colors are defined once at the top as variables (e.g. `--brass`, `--ink`), so changing a color there updates it everywhere.

**Headshot resolution:** the current headshot is small (300×362 pixels), so it looks slightly soft when enlarged on the home page. Replacing it with a higher-resolution version of the same photo — saved with the same filename, `images/bob-headshot.webp` — will sharpen it with no other changes needed.

**Recent fix:** the home-page portrait had a stretching issue that's been corrected (the image now keeps its true proportions).

---

## 8. One open design idea

There's an alternative look that was discussed but not built: a **"playbill" variant** — a lighter, printed-theater-program style (ivory/cream paper, black serif text, a classic playbill feel) instead of the current dark theme. Same content and structure, different skin. It's easy to produce as an alternate stylesheet if you ever want to compare the two. Worth knowing the option exists.

---

*That's everything needed to run and grow the site. The pieces to prioritize first are usually: your real contact email, the teaching paragraph, a few testimonials, and a couple of performance clips — those turn the framework into a living promotional site.*
