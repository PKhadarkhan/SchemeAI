<div align="center">

# 🏛️ SchemeAI

### *Discover the Government Schemes You May Be Eligible For — Intelligently.*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide_React-Icons-F56565?style=flat-square)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**B.Tech CSE (AI/ML) — Final Year Project | 2025–26**

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Setup](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 📌 Overview

**SchemeAI** is an AI-powered government scheme assistance platform that helps Indian citizens discover potentially relevant government schemes based on their profile and uploaded documents.

The system uses a multi-layer AI pipeline:

- **Computer Vision & YOLO** — automatic document type detection
- **OCR** — text extraction from scanned/photographed documents
- **NLP** — converting extracted text into structured eligibility data
- **Eligibility Analysis** — comparing user data against scheme criteria
- **Recommendation Engine** — ranking and surfacing potentially relevant schemes
- **Explainable AI (XAI)** — showing *why* each scheme was recommended

> ⚠️ **Disclaimer:** SchemeAI provides AI-assisted *preliminary* information only. It does **not** provide official government eligibility decisions, approvals, or guarantees. Users must verify eligibility with the concerned government authority.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI Document Analysis** | Upload documents and let AI extract key eligibility fields automatically |
| 🔍 **Smart Recommendations** | Personalized scheme suggestions ranked by relevance to your profile |
| 💡 **Explainable Results** | Every recommendation explains *why* it was suggested and what's still needed |
| 🌐 **Multilingual** | Interface supports English, తెలుగు (Telugu), and हिन्दी (Hindi) |
| 🔒 **Secure** | Role-based access, protected document handling, minimal data collection |
| 📱 **Fully Responsive** | Works seamlessly from 360px mobile to 1440px+ desktop |
| ♿ **Accessible** | ARIA labels, keyboard navigation, semantic HTML, reduced-motion support |
| ⚡ **Interactive Demo** | Animated AI pipeline walkthrough built into the landing page |

---

## 🧠 AI/ML Technologies Used

```
Document Upload
     │
     ▼
┌─────────────────────────┐
│  Computer Vision / YOLO │  ← Detect & classify document type
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│  OCR                    │  ← Extract text from document image
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│  NLP                    │  ← Structure extracted text into fields
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│  Eligibility Analysis   │  ← Match fields against scheme criteria
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│  Recommendation Engine  │  ← Rank & surface relevant schemes
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│  Explainable AI (XAI)   │  ← Explain results in plain language
└─────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend (Landing Page)
| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | Component-based UI framework |
| [Vite 8](https://vitejs.dev/) | Fast build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with custom design tokens |
| [Lucide React](https://lucide.dev/) | Modern icon library |
| Vanilla CSS Animations | Scroll-triggered fades, scanning effects, stagger |

### AI/ML Backend *(project scope)*
| Technology | Purpose |
|---|---|
| Python | Core backend language |
| YOLOv8 | Document object detection |
| Tesseract / EasyOCR | Optical character recognition |
| spaCy / Transformers | NLP for field extraction |
| Scikit-learn | Eligibility scoring & recommendation |
| LIME / SHAP | Explainable AI |
| Flask / FastAPI | REST API layer |

---

## 📁 Project Structure

```
schemeai/
├── public/
│   └── favicon.svg              # Custom SVG favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav + mobile hamburger
│   │   ├── Hero.jsx             # Hero section + animated AI dashboard card
│   │   ├── TrustStrip.jsx       # Platform highlights strip
│   │   ├── HowItWorks.jsx       # 4-step process with connector lines
│   │   ├── Features.jsx         # 6 AI capability feature cards
│   │   ├── AIDemo.jsx           # Interactive document pipeline demo
│   │   ├── SchemeCategories.jsx # 8 category cards (Education, Health…)
│   │   ├── Recommendations.jsx  # Sample scheme recommendation cards
│   │   ├── ExplainableAI.jsx    # XAI explanation card section
│   │   ├── Security.jsx         # Privacy & security principles
│   │   ├── Languages.jsx        # EN / Telugu / Hindi language switcher
│   │   ├── FinalCTA.jsx         # Final call-to-action section
│   │   ├── Disclaimer.jsx       # Legal disclaimer
│   │   └── Footer.jsx           # Dark footer with navigation links
│   │
│   ├── pages/
│   │   └── Home.jsx             # Assembles all sections in order
│   │
│   ├── hooks/
│   │   └── useInView.js         # Intersection Observer scroll hook
│   │
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind v4 theme tokens
│
├── index.html                   # HTML entry point with SEO meta tags
├── vite.config.js               # Vite + Tailwind plugin config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/PKhadarkhan/SchemeAI.git

# 2. Navigate into the project folder
cd SchemeAI/schemeai

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🎨 Design System

The landing page uses a professional government-digital-service colour palette:

| Token | Value | Usage |
|---|---|---|
| Primary Blue | `#1e3a8a` → `#2563eb` | CTAs, headings, accents |
| Background | `#ffffff` / `#f8fafc` | Page backgrounds |
| Success Green | `#22c55e` | Verified / matched states only |
| Warning Amber | `#d97706` | Missing information indicators only |
| Font | Inter (Google Fonts) | All typography |

---

## 🗺️ Page Sections

1. **Navbar** — sticky, glass-morphism on scroll, mobile hamburger
2. **Hero** — animated AI dashboard card with live document analysis simulation
3. **Trust Strip** — platform capability highlights
4. **How It Works** — 4-step process with visual connector lines
5. **AI Features** — Computer Vision · OCR · NLP · Eligibility · Recommendations · XAI
6. **Interactive Demo** — animated 4-stage document processing pipeline
7. **Scheme Categories** — Education · Agriculture · Employment · Housing · Healthcare · Women & Child · Social Security · Entrepreneurship
8. **Recommendations** — sample scheme cards with match indicators and explanations
9. **Explainable AI** — transparent reasoning display
10. **Security** — privacy principles
11. **Multilingual** — language switcher with live content preview
12. **Final CTA** — conversion section
13. **Disclaimer** — legal notice
14. **Footer** — links and copyright

---

## 🏫 Academic Context

| Field | Detail |
|---|---|
| **Degree** | B.Tech — Computer Science & Engineering (AI/ML) |
| **Year** | Final Year — 2025–26 |
| **Project Type** | AI-Powered Web Application (Landing Page + System) |
| **Domain** | GovTech · AI · NLP · Computer Vision |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for the citizens of India

**SchemeAI** — AI-assisted • Secure • Explainable

</div>
