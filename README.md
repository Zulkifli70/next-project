# PrintForge

A modern 3D printing model sharing and showcase platform built with Next.js. Browse, search, and discover 3D printing models across various categories.

## Demo Link

🔗 [**Live Demo**](https://next-project-eta-vert.vercel.app/)

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| ESLint | 9 |

## Project Structure

```
next-project/
├── app/
│   ├── page.tsx                 # Landing page with hero section
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── 3d-models/
│   │   ├── page.tsx             # Model listing with search
│   │   ├── [id]/
│   │   │   └── page.tsx         # Individual model detail
│   │   └── categories/
│   │       └── [categoryName]/
│   │           └── page.tsx     # Filtered models by category
│   ├── components/              # Reusable UI components
│   ├── data/                    # Static JSON mock data
│   ├── lib/                     # Data access functions
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

```bash
git clone https://github.com/your-username/next-project.git
cd next-project
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Features

- **3D Model Catalog** — Browse 52 curated 3D printing models across 10 categories
- **Search** — Full-text search across model names and descriptions
- **Category Filtering** — Sidebar navigation with active route highlighting
- **Model Detail Pages** — Individual pages with model info, likes, and metadata
- **Responsive Design** — Mobile-first layout with adaptive header and grid
- **Server Components** — Optimized rendering with selective client components

## Categories

3D Printer, Art, Education, Fashion, Hobby & DIY, Household, Miniatures, Props & Cosplay, Tools, Toys & Games

## Data Architecture

The project uses static mock data stored in local JSON files under `app/data/`. Data access functions are located in `app/lib/` and are designed to be easily replaceable with a real database integration.

## Environment Variables

No environment variables are required. The project runs entirely with local mock data.

## License

This project is private and not licensed for public use.
