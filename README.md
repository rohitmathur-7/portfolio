# Portfolio — Rohit Mathur

A modern, high-performance developer portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, 3D card effects, glassmorphism UI, and a fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-E91E63?logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)

## Features

- **Hero Section** — Mouse-tracking ambient orbs, typing role animation, floating geometric shapes, tech stack marquee
- **About** — Bento grid layout with animated stat cards, XML-tag decorations, location pulse indicator
- **Projects** — 3D perspective tilt cards with hover-reveal action buttons and featured badges
- **Skills** — Categorized skill pills with animated fill backgrounds, hover-reveal proficiency percentages, infinite marquee
- **Experience** — Scroll-driven animated timeline with pinging dots and staggered reveals
- **Contact** — Floating label inputs with animated borders, social links
- **Navigation** — Glassmorphism navbar with scroll progress bar, section tracking with animated active pill
- **Film grain overlay** and custom CSS animations throughout

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |
| Build | Turbopack |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rohitmathur-7/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, theme variables, custom animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Home page composing all sections
├── components/
│   ├── Hero.tsx          # Hero section with typing & parallax effects
│   ├── About.tsx         # Bento grid about section
│   ├── Projects.tsx      # 3D tilt project cards
│   ├── Skills.tsx        # Animated skill categories & pills
│   ├── Experience.tsx    # Scroll-driven timeline
│   ├── Contact.tsx       # Contact form & social links
│   ├── Navbar.tsx        # Glassmorphism navigation
│   ├── Footer.tsx        # Animated footer
│   └── SectionHeading.tsx # Reusable section header
└── data/
    └── portfolio.ts      # All portfolio content & configuration
```

## Customization

All portfolio content (projects, skills, experience, social links, etc.) is centralized in `src/data/portfolio.ts`. Update that single file to personalize the site.

## Deployment

This site is optimized for deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rohitmathur-7/portfolio)

## License

MIT
