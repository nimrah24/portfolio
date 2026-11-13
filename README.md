# S. Nimrah Shifa — Portfolio

Personal portfolio built with **React 18, TypeScript, Tailwind CSS and Vite**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Before deploying — checklist

1. **Resume:** replace `public/resume.pdf` with the real resume (keep the same file name).
2. **Project repo links:** fill the `github: ''` fields in `src/data/portfolio.ts`. Empty links show "Repository link coming soon".
3. **Contact form (optional):** without configuration the form opens the visitor's email app pre-filled.
   To receive messages directly, create a free form at [Formspree](https://formspree.io), copy `.env.example` to `.env`
   and set `VITE_FORM_ENDPOINT`, or add that variable in your hosting dashboard.
4. **SEO:** canonical URL is set to the GitHub Pages address in `index.html`; update it if you move to a custom domain.

All text content (skills, projects, certifications, contact details) lives in `src/data/portfolio.ts`.

## Deploy

- **Vercel / Netlify:** import the repo — build command `npm run build`, output directory `dist`.
- **GitHub Pages (current):** live at https://nimrah24.github.io/portfolio/ — run `npm run deploy` to publish changes.

## Structure

```
src/
  data/portfolio.ts      all content
  hooks/useInView.ts     scroll-reveal + active-section hooks
  components/            Navbar, Hero, NeuralBackground, About, Skills, Projects,
                         Experience, Achievements, Certifications, Contact, Footer, ui
```
