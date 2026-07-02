# Shubham Sharma — Portfolio

React + Framer Motion + Tailwind CSS portfolio.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & Deploy

```bash
npm run build
```

Deploy the `dist/` folder to Vercel:
1. Push this folder to a GitHub repo
2. Import at vercel.com/new
3. Framework: Vite — Vercel detects this automatically
4. Deploy

Or drag-drop the `dist/` folder at vercel.com/new.

## Adding your photo

In `src/components/About.tsx`, replace the placeholder div with:

```tsx
<div className="about-photo">
  <img src="/photo.jpg" alt="Shubham Sharma" />
</div>
```

Put `photo.jpg` in the `public/` folder.

## Resume

Put `Shubham_Sharma_Resume.pdf` in the `public/` folder.
The nav and hero already link to `/Shubham_Sharma_Resume.pdf`.

## Customization

- Colors: `tailwind.config.js` and `src/index.css`
- Content: edit the data arrays in each component
- Particle field: `src/components/ParticleField.tsx` — adjust `repelRadius`, `attractRadius`, particle count
