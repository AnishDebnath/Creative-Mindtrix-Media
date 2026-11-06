# Mindtrix Media

<p align="center">
  <strong>Next-Generation AI Creative Production Studio & Performance Ad Showcase</strong><br>
  Designed and Developed by <strong><a href="https://github.com/AnishDebnath">Anish Debnath</a></strong><br>
  Built with React 19, Vite 8, TypeScript, Tailwind CSS 4, Framer Motion, Cloudinary CDN, and Resend Serverless API.
</p>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Media & CDN Pipeline](#media--cdn-pipeline)
- [Deployment](#deployment)
- [Author & Credits](#author--credits)
- [License](#license)

---

## Overview

**Mindtrix Media** is an AI-powered creative production studio helping modern e-commerce brands, creators, and enterprise clients produce cinematic commercial videos, viral 9:16 short-form reels, high-end studio product photography, and comprehensive brand identity systems.

This repository powers the official client-facing portfolio, interactive showcase galleries, and automated inquiry pipeline for Mindtrix Media.

---

## Key Features

- **Interactive Dual-Marquee Engines**:
  - **Edge-to-Edge Staggered Showcase**: Continuous infinite reel displaying high-resolution 3:4 product videos and images with upper/lower alternating placement, pointer drag-to-scroll, and category deep-links.
  - **8-Partner Brand Marquee**: Fluid 36px/s subpixel auto-ticker featuring live client logos (Biswa Bangla, TPH, Rentalone, Rajkiya Jewellers, G Connect, Garulink, Charu Enterprise, Camera Rental House) with bidirectional drag-to-scroll and seamless wrapping.
- **Category Deep-Linking & History API Routing**:
  - Clean URL paths (`/images/fashion`, `/videos/luxury`, `/terms-and-conditions`, `/privacy-policy`) with browser back/forward (`popstate`) navigation and automatic smooth scrolling to relevant showcase views.
- **Media Lightbox & Video Player**:
  - Custom full-featured video and image modals with backdrop blur, aspect-ratio containment, and responsive mobile controls.
- **Serverless Lead & Email Engine**:
  - Production-grade `/api/contact` endpoint deployed on Vercel Serverless Functions.
  - Form validation with sanitized inputs and anti-abuse safeguards.
  - Dual automated dispatch via **Resend API**:
    - **Owner Lead Notification**: Detailed inquiry summary, formatted WhatsApp quick-reply link, and timestamped submission details.
    - **Client Auto-Responder**: Branded confirmation message with project timeline overview.
- **Cloudinary CDN Pipeline**:
  - Automated format negotiation (`f_auto`), quality optimization (`q_auto`), whitespace trimming (`e_trim`), and middle-frame video poster generation (`so_50p`).
- **Tailwind CSS 4 Modern Styling**:
  - Utility-first typography, fluid gradients (`#3d2035` to `#ed4f6c` to `#d97736`), custom masked gradients, and accessible focus states.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19, TypeScript 5.8+ |
| **Bundler & Tooling** | Vite 8, `@vitejs/plugin-react`, `@tailwindcss/vite` |
| **Styling** | Tailwind CSS 4, CSS Mask Gradients, Custom Animations |
| **Animations & UI** | Framer Motion, Lucide React Icons |
| **Backend / Serverless** | Vercel Serverless Functions (`node:http`), Resend REST API |
| **Media Delivery** | Cloudinary CDN (Direct HTTPS delivery with automated transformations) |

---

## Project Architecture

```
Creative-Mindtrix-Media/
├── api/
│   └── contact.ts                # Serverless contact API handler (Vercel / Local dev)
├── public/
│   ├── favicon.png               # Browser favicon
│   └── og-banner.png             # OpenGraph social sharing card
├── src/
│   ├── assets/                   # Brand logos, icons, and fallback graphics
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Navigation header with mobile menu and active section pills
│   │   │   └── Footer.tsx        # Global footer with legal links, social handles, and branding
│   │   ├── sections/
│   │   │   ├── Brands.tsx        # 8-brand partner showcase marquee with drag-to-scroll
│   │   │   ├── Cta.tsx           # Global conversion banner with email subscriber form
│   │   │   └── Faq.tsx           # Accordion FAQ component with schema-ready structure
│   │   └── ui/
│   │       ├── LazyVideo.tsx     # Intersection-observer lazy-loaded HTML5 video player
│   │       ├── SectionTag.tsx    # Styled section badge with gradient pill
│   │       └── Toast.tsx         # Notification toast for user feedback
│   ├── data/
│   │   ├── faq.ts                # Structured FAQ questions and answers
│   │   ├── images.ts             # Image catalog grouped by Fashion, Jewellery, Perfume, Beauty
│   │   ├── marquee.ts            # Top hero reel product catalog
│   │   ├── pricing.ts            # Transparent agency pricing tiers and feature lists
│   │   ├── process.ts            # 4-step creative workflow data
│   │   ├── services.ts           # Service deliverables, features, and descriptions
│   │   ├── testimonials.ts       # Client reviews and video story reels
│   │   └── videos.ts             # Video catalog grouped by Fashion, Beauty, Luxury, Commercials
│   ├── email/
│   │   ├── config.ts             # Environment variable resolution helper
│   │   ├── templates.ts          # HTML email templates for Owner and Client dispatches
│   │   ├── types.ts              # Email payload and contact request data interfaces
│   │   └── index.ts              # Clean module exports
│   ├── pages/
│   │   ├── contact/              # Contact page (Hero, ContactInfo, ContactForm)
│   │   ├── home/                 # Main homepage section compositions
│   │   ├── images/               # Image showcase with category filters and modal viewer
│   │   ├── privacy-policy/       # Legal Privacy Policy page
│   │   ├── terms-and-conditions/ # Legal Terms and Conditions page
│   │   └── videos/               # Video reels showcase with category filters and modal viewer
│   ├── utils/
│   │   ├── cloudinary.ts         # CDN URL builders, transform configs, and path registries
│   │   ├── scroll.ts             # Smooth scrolling helpers with offset compensation
│   │   └── seo.ts                # SEO metadata and dynamic document title utilities
│   ├── App.tsx                   # Main route controller and history state listener
│   ├── index.css                 # Global CSS and Tailwind directives
│   └── main.tsx                  # React DOM entry point
├── .env.example                  # Environment variable reference
├── .gitignore                    # Comprehensive repository ignore rules
├── index.html                    # HTML shell with meta tags and fonts
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # TypeScript compiler configuration
├── tsconfig.node.json            # Node/Vite TypeScript configuration
├── vercel.json                   # Vercel deployment routes and serverless headers
└── vite.config.ts                # Vite build and local API proxy middleware configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` (recommended: `20.18+` or `22.x`)
- **npm**: `v10.x` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnishDebnath/Creative-Mindtrix-Media.git
   cd Creative-Mindtrix-Media
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Configure the following variables in your `.env` file:

| Variable | Description | Example / Default |
|---|---|---|
| `VITE_CLOUDINARY_IMAGE_BASE_URL` | Cloudinary base delivery URL for image assets | `https://res.cloudinary.com/mindtrix-media/image/upload` |
| `VITE_CLOUDINARY_VIDEO_BASE_URL` | Cloudinary base delivery URL for video assets | `https://res.cloudinary.com/mindtrix-media/video/upload` |
| `RESEND_API_KEY` | Resend API key for inquiry dispatch | `re_xxxxxxxxxxxx` |
| `RESEND_FROM_EMAIL` | Verified sender address in Resend | `Mindtrix Media <hello@mindtrixmedia.com>` |
| `CONTACT_RECEIVER_EMAIL` | Destination mailbox for owner notifications | `mindtrixmediaindia@gmail.com` |
| `DISABLE_HMR` | Optional: disable HMR during agentic edits | `false` |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with local API middleware on port `3000` |
| `npm run build` | Runs full TypeScript validation (`npm run typecheck`) and compiles the production bundle to `dist/` |
| `npm run preview` | Serves the production build locally for verification |
| `npm run typecheck` | Validates types across application code (`tsconfig.json`) and tooling (`tsconfig.node.json`) |
| `npm run lint` | Alias for `npm run typecheck` |
| `npm run clean` | Deletes the `dist/` build directory |

---

## API Documentation

### Contact & Project Inquiry Endpoint

`POST /api/contact`

Receives prospective client inquiries, validates input fields, and dispatches transactional emails via Resend.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Body
```json
{
  "name": "Alex Mercer",
  "phone": "+91 98765 43210",
  "email": "alex@examplebrand.com",
  "projectModel": "Per Project",
  "selectedServices": [
    "AI Product Commercial Ads",
    "Viral 9:16 Short-Form Reels"
  ],
  "requirements": "Need 5 video ads for an upcoming summer apparel campaign."
}
```

#### Responses

- **`200 OK`**: Inquiry successfully received and emails dispatched.
  ```json
  { "success": true }
  ```
- **`400 Bad Request`**: Validation failed on compulsory fields (name, phone, email, services).
  ```json
  { "error": "Please provide a valid 10-digit phone number." }
  ```
- **`405 Method Not Allowed`**: Request method is not `POST` or `OPTIONS`.
- **`500 Internal Server Error`**: Upstream delivery failure.

---

## Media & CDN Pipeline

All visual assets (high-resolution product images, video reels, and brand logos) are served directly from Cloudinary CDN to optimize delivery performance and reduce bundle size:

- **Automatic Format & Quality**: `f_auto,q_auto` ensures WebP/AVIF delivery tailored to the client's browser.
- **Whitespace Trimming**: Brand logos utilize `e_trim` to eliminate inconsistent transparent bounding boxes.
- **Video Poster Extraction**: Videos utilize `so_50p` to serve lightweight middle-frame JPEG posters before video buffers.

Mappings are maintained in [`src/utils/cloudinary.ts`](file:///c:/Users/PC/Desktop/Creative-Mindtrix-Media/src/utils/cloudinary.ts).

---

## Deployment

### Vercel (Recommended)

This project is configured out-of-the-box for seamless Vercel deployment:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into your Vercel Dashboard.
3. Configure the environment variables (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECEIVER_EMAIL`, `VITE_CLOUDINARY_IMAGE_BASE_URL`, `VITE_CLOUDINARY_VIDEO_BASE_URL`).
4. Vercel automatically detects Vite and builds the client while deploying `api/contact.ts` as a serverless function.

---

## Author & Credits

Designed and developed with precision by **[Anish Debnath](https://github.com/AnishDebnath)**.

---

## License

Copyright &copy; 2026 **Mindtrix Media**. All rights reserved.  
Designed and Developed by **Anish Debnath**.
Proprietary creative production and web assets.
