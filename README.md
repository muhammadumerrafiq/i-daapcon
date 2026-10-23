# 🩺 3rd I-DAAP CON 2026 — Official Conference Web Application

[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%205-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%205-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/UI-shadcn%20%2F%20Radix%20UI-black.svg?style=flat&logo=radix-ui)](https://ui.shadcn.com/)
[![TanStack Query](https://img.shields.io/badge/Data-TanStack%20Query%20v5-FF4154.svg?style=flat&logo=react-query)](https://tanstack.com/query)
[![Vitest](https://img.shields.io/badge/Testing-Vitest-FCC72B.svg?style=flat&logo=vitest)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/E2E-Playwright-2EAD33.svg?style=flat&logo=playwright)](https://playwright.dev/)

> **The 3rd Annual International Dermatology and Aesthetic Conference (I-DAAP CON 2026)**  
> Hosted by the International Academy of Dermatology, Anti-Ageing and Plastic Surgery (I-DAAP)  
> 📍 **Venue:** Serena Hotel, Islamabad, Pakistan | 🗓️ **Dates:** October 24–26, 2026

---

## 📖 Overview

**I-DAAP CON 2026** is the official web portal for Pakistan's premier international gathering of dermatologists, aesthetic medicine practitioners, and plastic surgeons. Under the leadership of **Maj Gen (Retd) Zafar Iqbal Shaikh** (Conference Chairman), the platform serves as an interactive hub for conference registration, speaker profiles, scientific agendas, committee rosters, and multimedia archives.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, the application delivers an elegant, high-performance experience tailored for delegates, international speakers, sponsors, and organizers.

---

## ✨ Key Highlights & Features

- **🌐 Conference Landing & Hero Experience**: High-impact visual branding with dynamic countdown, event dates, and quick registration CTAs.
- **🏛️ Leadership & Chairman Address**: Features conference insights and welcome address by Conference Chairman Maj Gen (Retd) Zafar Iqbal Shaikh.
- **👥 Committee Directories**:
  - **Core Committee** (`/committee/core`): Executive council and key organizers.
  - **Organizing Committee** (`/committee/organizing`): Specialized sub-committees handling scientific tracks, logistics, and hospitality.
  - **Scientific Committee**: Academic leads curating sessions, workshops, and abstract reviews.
- **🎙️ Speakers & Scientific Tracks**: Detailed profiles of 30+ international and national faculty, topics, and clinical focus areas.
- **📝 Delegate Registration & Auth**: Dedicated portal for attendee registration (`/register`) and member login (`/login`) with robust form validation via **React Hook Form** and **Zod**.
- **🖼️ Interactive Gallery**: Visual showcases highlighting highlights and milestones from previous annual editions.
- **🤝 Sponsors & Industry Partners**: Dedicated partner tiers spotlighting pharmaceutical, laser technology, and cosmeceutical collaborators.
- **📱 Fully Responsive & Accessible**: Crafted using **Radix UI** primitives and **shadcn/ui** design patterns with fluid mobile navigation and smooth scrolling.

---

## 📊 Conference at a Glance

| Metric | Details |
| :--- | :--- |
| **Event Name** | 3rd I-DAAP CON 2026 |
| **Focus Areas** | Medical Dermatology, Aesthetic Surgery, Anti-Ageing Science |
| **International Speakers** | 30+ Global Experts |
| **Expected Delegates** | 1,000+ Healthcare Professionals |
| **Scientific Sessions** | 40+ Interactive Tracks & Live Demos |
| **Location** | Serena Hotel, Islamabad |

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) (with `@vitejs/plugin-react-swc`) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict typing) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), `tailwindcss-animate`, Custom gold-accent palette |
| **Component Primitives** | [Radix UI](https://www.radix-ui.com/) (Dialog, Dropdown, Accordion, Tooltip, Sheet, Tabs, etc.) |
| **State & Async Data** | [TanStack React Query v5](https://tanstack.com/query) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Embla Carousel |
| **Testing Suite** | [Vitest](https://vitest.dev/), `@testing-library/react`, [Playwright](https://playwright.dev/) |

---

## 📂 Repository Structure

```text
i-daapcon/
├── public/                    # Static assets & favicon
├── src/
│   ├── assets/                # Conference imagery, logos, and portraits
│   ├── components/            # Section components
│   │   ├── ui/                # Accessible Radix / shadcn/ui primitives
│   │   ├── AboutSection.tsx   # Conference overview & statistics
│   │   ├── ChairmanSection.tsx# Message from Maj Gen (Retd) Zafar Iqbal Shaikh
│   │   ├── Footer.tsx         # Comprehensive footer with quick links & contacts
│   │   ├── GallerySection.tsx # Event highlights & photo gallery
│   │   ├── Header.tsx         # Navigation header & mobile responsive menu
│   │   ├── HeroSection.tsx    # Conference banner, date/venue & CTAs
│   │   ├── LeadershipSection.tsx # Core conference leaders
│   │   ├── ScientificCommitteeSection.tsx # Academic committee review board
│   │   ├── SpeakersSection.tsx# Keynote and guest speaker catalog
│   │   └── SponsorsSection.tsx# Corporate partners and sponsors
│   ├── hooks/                 # Custom React hooks (e.g. useInView, use-toast)
│   ├── lib/                   # Utility functions & helpers (cn merge)
│   ├── pages/                 # Routed page views
│   │   ├── CoreCommittee.tsx  # Executive committee roster
│   │   ├── Index.tsx          # Conference home page
│   │   ├── Login.tsx          # Delegate / member portal login
│   │   ├── NotFound.tsx       # 404 handler
│   │   ├── OrganizingCommittee.tsx # Organizing committee breakdown
│   │   └── Register.tsx       # Conference delegate registration form
│   ├── test/                  # Unit and integration test suites
│   ├── App.tsx                # App routing & provider root
│   ├── index.css              # Global styles, variables, typography & theme
│   └── main.tsx               # Application entry point
├── components.json            # shadcn/ui configuration
├── playwright.config.ts       # Playwright E2E configuration
├── tailwind.config.ts         # Tailwind theme & design tokens
├── vite.config.ts             # Vite build settings
└── vitest.config.ts           # Vitest configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have one of the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher) and `npm`, `pnpm`, or `yarn`
- Alternatively, [Bun](https://bun.sh/) (v1.0+)

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadumerrafiq/i-daapcon.git
cd i-daapcon
```

### 2. Install Dependencies

Using **Bun**:
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `vite` | Starts local development server with HMR |
| `build` | `vite build` | Compiles optimized production bundle |
| `preview` | `vite preview` | Previews the production build locally |
| `lint` | `eslint .` | Runs ESLint across the codebase |
| `test` | `vitest run` | Runs unit and component test suites |
| `test:watch` | `vitest` | Runs Vitest in interactive watch mode |

---

## 👤 Author & Credits

- **Organizing Body**: International Academy of Dermatology, Anti-Ageing and Plastic Surgery (I-DAAP)
- **Conference Chairman**: Maj Gen (Retd) Zafar Iqbal Shaikh
- **Developer & Maintainer**: [Muhammad Umer Rafiq](https://github.com/muhammadumerrafiq)
- **License**: Proprietary / Conference Portfolio.
