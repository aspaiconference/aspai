# ASPAI Website — aspaiconference.org

Source code for the website of the **Asia-Pacific Symposium on Process and Artificial
Intelligence (ASPAI)**.

It is a plain static site: hand-written HTML and CSS with a little vanilla JavaScript.
There is no framework, no build step and no package manager. GitHub Pages serves the files
in this repository exactly as they are.

ASPAI is held every year, so the site copies the model of
[icpmconference.org](https://icpmconference.org): a **series home page** at the root lists
every edition, and **each year has its own self-contained sub-site** in a folder named after
the year.

| | |
|---|---|
| Live site | <https://aspaiconference.org> |
| Repository | <https://github.com/aspaiconference/aspai> (**public**: anyone can read every file and every past commit) |
| Hosting | GitHub Pages, deployed from branch `main`, folder `/` (root) |
| Domain registrar and DNS | Gabia (gabia.com). Registered 2026-02-05, **expires 2028-02-05** |
| Current state | `2026/` is archived (event held August 2026). `2027/` is a single placeholder page, work in progress |

---

## Contents

1. [Repository layout](#1-repository-layout)
2. [Domain and hosting](#2-domain-and-hosting)
3. [Getting access](#3-getting-access)
4. [Previewing locally](#4-previewing-locally)
5. [Publishing changes to the live site](#5-publishing-changes-to-the-live-site)
6. [Building the 2027 site](#6-building-the-2027-site)
7. [Updating the series home page (every year)](#7-updating-the-series-home-page-every-year)
8. [Recurring tasks](#8-recurring-tasks)
9. [External accounts and services](#9-external-accounts-and-services)
10. [Rules](#10-rules)

---

## 1. Repository layout

```
/
├── CNAME          Custom domain for GitHub Pages ("aspaiconference.org"). Never move, rename or delete.
├── index.html     Series home page: list of all editions (Next / Latest / Past)
├── assets/        Used ONLY by the series home page
│   ├── style.css
│   └── editions/  One thumbnail per edition, named <year>.jpg (2:1 aspect ratio)
├── 404.html       Sends old pre-2027 URLs on to /2026/... (see "Legacy URLs" below)
├── 2026/          ASPAI 2026 site. The event is over; this is an archive. Do not edit.
├── 2027/          ASPAI 2027 site. Work in progress (index.html + style.css so far)
├── .gitignore
└── README.md
```

**Each year folder is an independent site.** It has its own `style.css`, images, logos and
scripts, and shares nothing with other years or with the series home page. This is
deliberate: a redesign of 2027 must never break the 2026 archive or the series home. The
price is some duplicated files, and that price is accepted.

URLs follow the folders directly: `2027/index.html` is served at
`https://aspaiconference.org/2027/`, and `2027/registration.html` at
`https://aspaiconference.org/2027/registration.html`.

### What is in `2026/`

Use these pages as templates when you build the next edition.

| File(s) | Purpose |
|---|---|
| `index.html` | Edition home page |
| `general-info.html` | Key dates, accommodation, venue, committee |
| `call-for-papers.html`, `accepted-papers.html`, `conference.html` | Academic conference |
| `registration.html`, `visa-information.html`, `faq.html`, `sponsors.html` | Practical information |
| `industry-day.html`, `industry-day-program.html`, `industry-day-venue.html` | Industry Day (Seoul): pages inside the main site |
| `iday_en.html`, `iday_ko.html` | Industry Day stand-alone promotion pages (English / Korean) with their own design |
| `english.html`, `korea.html` | Redirect stubs to `iday_en.html` / `iday_ko.html`. They keep old links working |
| `summer-school.html`, `summer-school-program.html`, `summer-school-lecturers.html`, `summer-school-preparation.html` | Process Mining Summer School (Pohang). Lecture slide downloads are on `summer-school.html` |
| `summer-school-en.html`, `summer-school-ko.html` | Summer School stand-alone promotion pages (English / Korean) |
| `search.js` | Client-side site search. The list of pages is hard-coded inside the file |
| `summer-school-form.gs` | Google Apps Script that generates the Summer School registration Google Form. The site does not use it; it is kept for reference (see [8.2](#82-registration)) |
| `slides/`, `datasets/`, `logos/`, `logos/mono/`, `korea-speakers/`, `사진/` | Lecture slides, hands-on datasets, sponsor logos, speaker photos, venue photos (`사진` = "photos") |

---

## 2. Domain and hosting

### 2.1 How a request reaches the site

```
Visitor's browser:  https://aspaiconference.org/2027/
        │
        ▼
DNS — nameservers at Gabia (ns.gabia.co.kr, ns.gabia.net, ns1.gabia.co.kr)
        │   aspaiconference.org       A      185.199.108.153  ┐
        │   aspaiconference.org       A      185.199.109.153  │  GitHub Pages
        │   aspaiconference.org       A      185.199.110.153  │  servers
        │   aspaiconference.org       A      185.199.111.153  ┘
        │   www.aspaiconference.org   CNAME  aspaiconference.github.io.
        ▼
GitHub Pages
        │   The domain matches the CNAME file of repo aspaiconference/aspai,
        │   so GitHub serves that repo: branch main, folder / (root)
        ▼
File:  2027/index.html
```

GitHub also handles these redirects automatically. Nothing needs to be configured:

| Request | Redirects to |
|---|---|
| `http://aspaiconference.org/...` | `https://aspaiconference.org/...` ("Enforce HTTPS" is on) |
| `https://www.aspaiconference.org/...` | `https://aspaiconference.org/...` |
| `https://aspaiconference.github.io/aspai/...` | `https://aspaiconference.org/...` |

GitHub issues the HTTPS certificate and renews it automatically, as long as the DNS records
above keep pointing at GitHub.

### 2.2 URL map

| URL | Served from |
|---|---|
| `/` | `index.html` (series home page) |
| `/2026/...` | `2026/...` (archive) |
| `/2027/...` | `2027/...` |
| `/2028/...` and later | Create the folder and push it; the URL then works. No DNS or GitHub change is needed |
| Any path that does not exist | `404.html` (see below) |

### 2.3 Legacy URLs (`404.html`)

Until October 2026 the 2026 site lived at the root of the repository. Links such as
`/summer-school.html`, `/korea.html` or `/slides/xxx.pdf` therefore went out on posters,
QR codes and emails. When the site moved into `2026/`, `404.html` was added to keep those
links alive:

- GitHub Pages serves `404.html` for any path that does not exist.
- A small script inside it checks the path. If the path does **not** start with `/20xx/`, it
  sends the visitor to `/2026/<same path>`. For example, `/summer-school.html` goes to
  `/2026/summer-school.html`.
- A missing page *inside* a year folder (for example `/2027/nope.html`) is not redirected;
  it just shows "Page not found".

Things to know:

- The redirect runs in JavaScript, so the HTTP status is still `404`. Browsers follow it;
  `curl` and search-engine crawlers do not.
- `404.html` can appear at any URL depth, so every link and asset inside it must be an
  absolute path that starts with `/`.
- Do not create root-level files with the same names as 2026 pages (for example
  `/registration.html`). If such a file exists, the old URL serves the new file and the
  redirect to `/2026/` stops happening.

### 2.4 Email on the domain

`aspaiconference.org` has **no MX record**, so it cannot receive email. Every contact address
on the site must be a mailbox somewhere else. The series home page and the 2027 page
currently show the placeholder `contact@email.com`; replace it once the real contact is
decided. If you ever want addresses like `info@aspaiconference.org`, set up an email
forwarding service at Gabia. Add only the MX/TXT records it needs and **do not change the A
or CNAME records**.

### 2.5 Where the settings live

**Gabia (domain and DNS).** Log in to the Gabia account that owns the domain and open the DNS
settings for `aspaiconference.org`. The only records the website needs are the four `A`
records and the `www` `CNAME` shown in 2.1. Edit DNS only if the hosting changes.
**Renew the domain before 2028-02-05.** If it lapses, the site goes offline and someone else
can register the name.

**GitHub (hosting).** Repository → *Settings* → *Pages*:

- Source: **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**
- Custom domain: **`aspaiconference.org`**
- **Enforce HTTPS**: checked

If you change the custom domain in that screen, GitHub rewrites the `CNAME` file with a
commit of its own. Run `git pull` afterwards.

**Recommended hardening (not yet done):** verify the domain in the GitHub settings of the
`aspaiconference` account (*Settings* → *Pages* → *Add a domain*). GitHub gives you a TXT
record to add at Gabia. Once verified, no other GitHub account can attach a site to
`aspaiconference.org`.

---

## 3. Getting access

`aspaiconference` on GitHub is a **user account**, not an organization. It owns the
repository. There are two ways to get write access:

- **Recommended:** keep using your own GitHub account and ask the current maintainer to add it
  as a collaborator (repository → *Settings* → *Collaborators*).
- Log in as the shared `aspaiconference` account. Its credentials must be handed over
  privately, never through this repository, an issue or a commit.

Then clone the repository:

```bash
git clone https://github.com/aspaiconference/aspai.git
cd aspai
```

For authentication, use `gh auth login` (GitHub CLI), Git Credential Manager or an SSH key.
**Do not paste a personal access token into the remote URL**
(`https://user:TOKEN@github.com/...`). Git stores that URL in plain text in `.git/config`,
where anyone with access to the machine can read it.

---

## 4. Previewing locally

Start a local web server from the **repository root**:

```bash
python3 -m http.server 8000
```

Then open:

- <http://localhost:8000/> for the series home page
- <http://localhost:8000/2027/> for the 2027 site

Serve from the root, not from inside `2027/`, so that links between the series home page and
the year folders resolve the same way they do in production. The legacy-URL redirect in
`404.html` only works on GitHub Pages; the Python server shows its own 404 page.

---

## 5. Publishing changes to the live site

There is no separate deploy step: **whatever is on the `main` branch is the live site.**
Pushing to `main` publishes it.

```bash
git pull                                # 1. get everyone else's changes first
# ... edit files, then preview locally (section 4) ...
git status                              # 2. check what you changed
git add 2027/index.html 2027/style.css  # 3. add the files you mean to publish
git commit -m "2027: add call for papers page"
git push origin main                    # 4. publish
```

What happens next:

1. GitHub automatically runs a workflow called **"pages build and deployment"**. You can
   follow it in the repository's **Actions** tab. It usually takes 1–2 minutes.
2. A green check means the site is live. A red cross means the build failed: open the run to
   read the log. The previous version stays online until a build succeeds.
3. Open the live page and force a reload (Ctrl+Shift+R, or Cmd+Shift+R on a Mac). GitHub's
   CDN caches pages for up to **10 minutes** (`Cache-Control: max-age=600`), so other people
   may see the old version for a few minutes.

**Undoing a change:** run `git revert <commit-hash>` and push. This adds a new commit that
reverses the bad one. Do not use `git push --force` on `main`.

**Jekyll:** GitHub Pages passes the repository through Jekyll, because there is no
`.nojekyll` file. For plain HTML this makes no difference, with one exception: **files and
folders whose names start with `_` or `.` are not published.** If you need such names, add an
empty file named `.nojekyll` at the repository root.

**File size limits:** GitHub rejects files over 100 MB and warns above 50 MB. Every file ever
committed stays in the history forever, even if it is deleted later; the `.git` folder is
already about 110 MB. Compress PDFs before committing them, and put very large downloads
(videos, big zip files) on external storage and link to them.

---

## 6. Building the 2027 site

1. **Work only inside `2027/`.** Leave `2026/` untouched.
2. **Start from the 2026 pages.** Copy the pages you need from `2026/` into `2027/`, together
   with every image, logo or script they reference, and then edit the content. For example,
   `2026/call-for-papers.html` becomes `2027/call-for-papers.html`. The 2026 pages use the
   2026 `style.css`; copy it over or merge it into `2027/style.css` as needed.
3. **Use relative paths only:**
   - ✅ `href="registration.html"`, `src="logos/postech.jpg"`
   - ❌ `href="/registration.html"`, `href="https://aspaiconference.org/registration.html"`
4. **Update everything that is specific to the year**, especially in copied pages:
   - Page `<title>`, edition number ("2nd" → "3rd"), dates, venue, committee
   - EasyChair link (`https://easychair.org/conferences/?conf=aspai2026`): create a new
     EasyChair instance for 2027
   - Registration link (the 2026 `registration.html` points to the POSTECH PCO event page
     for 2026; it needs a new event page for 2027)
   - Google Form links (`forms.gle/...`). The 2026 stand-alone promotion pages also contain
     the placeholder link `https://forms.gle/XXXXXXXXXXXX`; replace it if you copy those pages
   - Contact email. **`eon7777@postech.ac.kr` is no longer a valid contact; do not copy it
     into 2027 pages.** Use `contact@email.com` until the real address is decided, then
     replace every occurrence
5. **Site search:** if you reuse `2026/search.js`, rewrite the `searchIndex` list at the top
   of the file so it describes the 2027 pages.
6. **Before launch,** search the folder for leftovers:
   ```bash
   grep -rn "2026\|contact@email.com\|XXXXXXXX" 2027/
   ```

---

## 7. Updating the series home page (every year)

The comment at the top of the root `index.html` lists the places to change. Editions are
listed newest first. Each entry has a thumbnail on the left, and the edition name with venue
and dates on the right.

- **When the venue and dates are fixed:** update the top-menu link `Next: 2027 – TBA`, the
  `2027 – TBA` item in the `Past` dropdown, and the venue/date line of the 2027 entry. Add a
  thumbnail photo as `assets/editions/2027.jpg` (2:1 aspect ratio) and replace the text-only
  "2027" box with an `<img>`, following the 2026 entry.
- **When the event is over:** point the `Latest` menu link to that year, and move
  `id="past"` to that year's entry. (`id="past"` marks the most recent finished edition;
  clicking `Past` on desktop scrolls to it.)
- **When preparation for the next year (2028) starts:** copy `2027/style.css` and a basic
  `index.html` into a new `2028/` folder. Point `Next` to 2028, and add a 2028 item at the top
  of both the `Past` dropdown and the edition list.
- `contact@email.com` on this page is a placeholder (2 places). Replace it with the real
  contact.

---

## 8. Recurring tasks

### 8.1 Adding lecture slides

1. Copy the PDF into the year's `slides/` folder, for example `2027/slides/`. Use a file name
   without spaces.
2. In that year's `summer-school.html`, add a download link under the matching session in the
   program, using the same markup as the 2026 page:
   ```html
   <a class="slides-link" href="slides/My-Lecture.pdf" download>Download lecture slides</a>
   ```
   For a block of downloadable files (datasets, assignments), reuse the `download-grid` /
   `download-card` markup from `2026/summer-school-preparation.html`.
3. Commit and push (section 5).

### 8.2 Registration

The site collects no data itself; it only links to external registration systems. In 2026:

- **Conference registration** went through POSTECH's PCO event system. The "Register" button
  on `2026/registration.html` links to `pco.postech.ac.kr`.
- **Industry Day registration** used a Google Form, linked from `iday_en.html` /
  `iday_ko.html`.
- **Summer School registration** used a Google Form generated by
  `2026/summer-school-form.gs`. The stand-alone `summer-school-en.html` /
  `summer-school-ko.html` pages contain only the placeholder link.

To create a form from the script:

1. Open <https://script.google.com> and create a new project.
2. Paste the contents of the file, then edit the dates, venue and contact for the new year.
3. Select the function `createSummerSchoolForm` and click ▶ *Run*. Grant the permissions it
   asks for with your Google account.
4. The execution log shows the edit URL and the response URL of the new form.

The form and its responses belong to the Google account that ran the script, so plan who
should own them before you run it. The `.gs` file itself is publicly downloadable from the
site; keep secrets out of it. **Never commit registrant data (names, emails, phone numbers)
to this repository. It is public.**

### 8.3 Paper submissions

Papers were submitted through EasyChair (`conf=aspai2026`). Create a new EasyChair conference
for each edition and update the links in that year's pages.

---

## 9. External accounts and services

No credentials are stored in this repository. Ask the ASPAI organizing team for access to the
accounts below.

| Service | Used for | Notes |
|---|---|---|
| GitHub, user account `aspaiconference` | Owns the repository; GitHub Pages hosting | Prefer collaborator access with your own account (section 3) |
| Gabia | Domain registration and DNS | Renewal due by **2028-02-05** |
| POSTECH PCO event system (`pco.postech.ac.kr`) | Conference registration | One event page per edition |
| Google Forms | Industry Day and Summer School registration | Owned by whichever Google account created them |
| EasyChair | Paper submission and review | One conference instance per edition |

---

## 10. Rules

- **Do not move, rename or delete `CNAME`.** Without it the custom domain stops working.
- **Do not delete `404.html`.** It keeps old links from posters, QR codes and emails working.
- **Do not edit `2026/`.** It is the archive of a finished event.
- **Nothing private goes into this repository.** That means passwords, tokens and personal
  data such as registrant lists. The repository is public, and deleted files stay visible
  in the history.
- **Think before committing large files.** They make the repository bigger forever.
- **Do not force-push to `main`.** Use `git revert` to undo a change.
