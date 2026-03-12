# SarkarTech

Static marketing site for SarkarTech — we convert cool ideas into useful web applications, run hackathons, and build real-world projects with AI-enhanced coding.

## Logo

Place your logo image **in the project root** as `sarkartech2.png`. It is copied into `public/` on `npm run dev` and `npm run build` so it is served at the site root.

## Products preview images

The "Explore our existing products" section uses a placeholder image for **practice.skillvantix.com**. To use your own preview:

1. Add an image (e.g. `practice-skillvantix.png`) under `public/`.
2. In `src/components/Products.jsx`, set `preview: '/practice-skillvantix.png'` for that product.

## Form (static, no backend)

The "Submit your idea" form is **static**: on submit it opens the user’s email client with:

- **To:** muhammed.salman@sarkartech.in  
- **Subject/body:** filled from the form.

Users can attach documents there. For very large files (e.g. up to 500 MB), the form hints at using a cloud link (Google Drive, WeTransfer, etc.) in the message, since many email servers limit attachments to ~25 MB.

## Commands

```bash
npm install
npm run dev    # Copy logo + start dev server
npm run build  # Copy logo + build for production
npm run preview # Preview production build
```

## Stack

- **Frontend:** React 18 + Vite  
- **Backend:** None (static site; form uses `mailto:`)

Build output is in `dist/` and can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).
