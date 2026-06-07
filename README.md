# Kingfisher of Baltiza

Blog and website for Meg Loftus' sailing expedition to Greenland aboard *Kingfisher of Baltiza*.

## About

This is a static HTML/CSS/JS website chronicling Meg Loftus's voyage from Scotland to the East Greenland fjords and back — a ~3,400 nautical mile round trip aboard a 1982 steel sloop.

## Pages

| File | Description |
|---|---|
| `index.html` | Home page — hero, boat introduction, expedition highlights, latest posts |
| `expedition.html` | Full expedition details — route, timeline, preparations |
| `blog.html` | Blog post index |
| `about.html` | About Meg and the boat |
| `blog/` | Individual blog post pages |

## Structure

```
.
├── index.html
├── expedition.html
├── blog.html
├── about.html
├── css/
│   └── style.css        # Nautical-themed stylesheet
├── js/
│   └── main.js          # Navigation toggle, scroll effects, newsletter form
└── blog/
    ├── the-idea.html
    ├── scoresby-sund.html
    ├── why-a-steel-boat.html
    ├── finding-crew.html
    ├── planning-the-greenland-route.html
    └── final-preparations.html
```

## Running Locally

Open `index.html` in any web browser. No build step or server required — it is a fully static site.

## Adding a New Blog Post

1. Copy an existing post from `blog/` as a template.
2. Update the title, meta description, date, category, and body content.
3. Add a link to the new post in `blog.html` (and optionally in the "Recent Posts" footer lists).

© 2025 Meg Loftus · Kingfisher of Baltiza
