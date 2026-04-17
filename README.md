# YourStartup Website

Built with Astro + Tailwind CSS.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → Open http://localhost:4321
```

## File structure

```
src/
├── layouts/
│   └── Base.astro          ← HTML shell, fonts, meta tags
├── components/
│   ├── Nav.astro            ← Top navigation bar
│   ├── Hero.astro           ← Headline, sub-headline, CTA buttons
│   ├── Problem.astro        ← 3 problem cards
│   ├── Product.astro        ← Screenshot + 4 feature descriptions
│   ├── Team.astro           ← 3 team member cards
│   ├── Waitlist.astro       ← Email capture form
│   └── Footer.astro         ← Links, copyright
└── pages/
    └── index.astro          ← Assembles everything
```

## Adding your product screenshot

In `Product.astro`, replace the placeholder `<div>` with:

```astro
<img src="/screenshot.png" alt="YourProduct interface" class="w-full" />
```

Then drop `screenshot.png` in the `/public` folder.

## Adding team photos

In `Team.astro`, replace the initials `<div>` with:

```astro
<img src="/team/alice.jpg" alt="Alice Chen" class="w-12 h-12 rounded-full object-cover mb-4" />
```

Drop photos in `/public/team/`.

## Regenerating the favicon

After editing `public/chipicon.svg`, rebuild `public/favicon.ico`:

```bash
brew install imagemagick  # one-time
npm run favicon
```

## Deploying (free)

**Vercel:**

```bash
npm i -g vercel
vercel
```

**Netlify:**

- Push to GitHub
- Go to netlify.com → "New site from Git"
- Build command: `npm run build`
- Publish directory: `dist`

## Setting up the waitlist form

1. Go to https://formspree.io and create a free account
2. Create a new form → copy your form ID
3. In `Waitlist.astro`, replace `YOUR_FORM_ID` in the action URL
4. Submissions land in your Formspree dashboard + email

## Changing the brand color

In `tailwind.config.mjs`, edit the `brand` color values.
The current color is a clean carmine red (`#960018`).
