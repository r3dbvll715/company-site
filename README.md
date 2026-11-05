# NEXUS STUDIO — Digital Product & Experience Agency Website

A modern, high-performance website for **NEXUS Studio**, an award-winning digital product engineering and creative agency.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring dark luxury glassmorphism aesthetics, responsive layout, micro-interactions, and modular architecture.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + custom CSS glassmorphism & gradients
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd /Users/marcosgil/Documents/sites/company-site
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

```bash
npm run build
```

Production build artifacts will be generated in `dist/`.

To test the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
company-site/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme extensions & animations
├── tsconfig.json                # TypeScript strict configuration
├── vite.config.ts               # Vite configuration
└── src/
    ├── main.tsx                 # React DOM root
    ├── App.tsx                  # Primary page orchestrator
    ├── index.css                # Tailwind directives & glassmorphic utility classes
    ├── types.ts                 # TypeScript data contracts & models
    ├── data/
    │   └── content.ts           # Centralized agency copy, services, projects, stats & team
    └── components/
        ├── Navbar.tsx           # Glassmorphic navbar with mobile drawer & status pill
        ├── Hero.tsx             # Dynamic hero with background mesh & client ticker
        ├── Services.tsx         # Capabilities grid with deliverables & tech tags
        ├── Portfolio.tsx        # Filterable case studies with detail modal
        ├── StatsStory.tsx       # Key metrics counters & agency philosophy
        ├── Testimonials.tsx     # Client reviews with 5-star rating cards
        ├── Team.tsx             # Core architects & practitioners showcase
        ├── Contact.tsx          # Interactive project brief inquiry form
        └── Footer.tsx           # Comprehensive footer with quick links & clock
```

---

## 📄 License

MIT

