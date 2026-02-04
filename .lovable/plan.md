

# Add Sitemap.xml for Site Scraping & SEO

## The Problem

Your site is missing a `sitemap.xml` file. Scraping tools and search engines use sitemaps to discover all pages on a website. Currently you only have a `robots.txt` file, which tells crawlers what they're allowed to access but doesn't tell them *where* your pages are.

---

## The Solution

I'll create a `sitemap.xml` file in the `public` folder and update `robots.txt` to reference it.

---

## Technical Details

### Files to Create/Modify

**1. Create `public/sitemap.xml`**

This will include all your routes:
- Main pages: `/`, `/about`, `/canon`, `/art`, `/music`, `/transmissions`, `/writings`, `/echoverse`, `/shop`, `/news`, `/contact`
- Legal pages: `/privacy`, `/terms`

**2. Update `public/robots.txt`**

Add a `Sitemap:` directive pointing to the sitemap location so crawlers can automatically find it.

---

### Sitemap Structure

```text
sitemap.xml will include:
├── / (Home)
├── /about
├── /canon
├── /art
├── /music
├── /transmissions
├── /writings
├── /echoverse
├── /shop
├── /news
├── /contact
├── /privacy
└── /terms
```

Each URL entry will include:
- `<loc>` - The full URL
- `<changefreq>` - How often the page changes (daily/weekly/monthly)
- `<priority>` - Relative importance (0.0 to 1.0)

---

### Note on Dynamic Routes

Your site has dynamic routes like `/canon/:slug`, `/art/:slug`, `/writings/:slug`, and `/news/:slug`. Since these depend on your data files, I'll include the static parent pages. For a fully dynamic sitemap that automatically includes all detail pages, you would need server-side generation - but for scraping purposes, the static sitemap will work well.

---

## Summary

| Task | File |
|------|------|
| Create sitemap with all routes | `public/sitemap.xml` |
| Add sitemap reference | `public/robots.txt` |

This is a quick fix - should take just a minute to implement.

