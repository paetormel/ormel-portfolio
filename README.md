# Ormel Portfolio 2.0

A single-page portfolio built with React and Vite. The site presents Ormel's frontend work through a cinematic space-themed layout, animated section reveals, scrolling skill marquees, project cards, and a floating Gemini-powered assistant that answers in Taglish.

## Stack

- React 19
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- Motion / Framer Motion style animation APIs
- AOS for scroll-triggered reveals
- Google Gemini via `@google/generative-ai`

## Features

- Fixed navigation with anchor links to each section
- Full-screen landing hero with animated typography
- About section with personal intro and portfolio positioning
- Skills section with looping marquee rows for core tools
- Project gallery cards for featured work
- Contact form UI for inquiries
- Floating AI assistant styled as `Orbital Bot`
- Custom visual theme with stars, glow layers, and local font assets

## Sections

- `Home`
- `About`
- `Skills`
- `Projects`
- `Contact`

All sections are rendered in [`src/layout/RootLayout.jsx`](/c:/xampp/htdocs/portfolio_2.0/src/layout/RootLayout.jsx), which also mounts the chatbot and the animated background layer.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

The chatbot reads this value from `import.meta.env.VITE_GEMINI_API_KEY`.

### Run Locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint across the project

## Project Structure

```text
src/
  components/   Reusable UI such as Navbar, ProjectCard, ChatBot
  layout/       Root page composition
  pages/        Home, About, Skills, Projects, Contact sections
  index.css     Global styles, theme tokens, fonts, animations
public/
  fonts/        Local font assets
  *.jpg|*.png   Portfolio and decorative images
```

## Notes

- The chatbot uses Gemini `gemini-2.5-flash` and is prompted to answer as Ormel's portfolio assistant.
- The contact form is currently presentational and does not submit anywhere yet.
- Some project card content is still placeholder copy and can be replaced with final project details.
- Social icons and CTA buttons are visible in the UI, but some actions are not wired to external links yet.

## License

This project is for personal portfolio use.
