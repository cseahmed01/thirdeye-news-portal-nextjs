# News Portal Frontend - Complete Project Documentation

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)

A modern, responsive news portal built with Next.js 15, React 19, and Tailwind CSS v4. This application features server-side rendering, dynamic routing, and a comprehensive component architecture for displaying news articles, videos, and reels.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Configuration](#-environment-configuration)
- [Project Structure](#-project-structure)
- [API Architecture](#-api-architecture)
- [Component Architecture](#-component-architecture)
- [Routing Structure](#-routing-structure)
- [Development Workflow](#-development-workflow)
- [Build & Deployment](#-build--deployment)
- [Performance Features](#-performance-features)
- [Security Considerations](#-security-considerations)
- [Troubleshooting](#-troubleshooting)

## ✨ Features

### Core Features

- 🏠 **Homepage** with featured news, breaking news, latest articles
- 📰 **Article Pages** with detailed content and related news
- 📂 **Category Pages** with pagination and filtering
- 🎬 **Video Gallery** with embedded video players
- 📱 **Reels Section** for short-form video content
- 🔍 **Search Functionality** (navigation ready)
- 📱 **Responsive Design** for all device sizes

### User Features

- 👤 **Authentication System** (Sign in, Sign up, Password reset)
- 🔐 **OTP Verification** for secure authentication
- 👥 **User Account Management**
- 📧 **Password Recovery** system

### Technical Features

- ⚡ **Server-Side Rendering (SSR)** for SEO optimization
- 🔄 **Incremental Static Regeneration (ISR)** for performance
- 📊 **Client-Side Pagination** for smooth user experience
- 🎨 **Dark/Light Mode** ready architecture
- 🌐 **Internationalization** ready (Bengali/English support)
- 📈 **Performance Optimized** with Next.js best practices

## 🛠 Tech Stack

### Frontend Framework

- **Next.js 15.3.2** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **JavaScript** - ES2022+ with modern syntax

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **ShadCN/UI** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons
- **Custom Fonts** - SutonnyMJ for Bengali typography

### State & Data

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **React Hooks** - Local state management
- **Server Components** - Server-side data fetching

### Development Tools

- **Turbopack** - Ultra-fast bundler
- **PostCSS** - CSS processing
- **ESLint** - Code linting (basic setup)

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js 18.0.0** or higher
- **npm 9.0.0** or higher (or yarn/pnpm equivalent)
- **Git** for version control
- **Backend API** running (see API Configuration section)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/zzazzo-limited/newsportal-frontend.git
cd newsportal-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env
```

### 4. Configure Environment Variables

Edit `.env` with your configuration:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://192.168.4.11:8000/api/v1
API_CLIENT_KEY=web-12345
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 Environment Configuration

### Required Environment Variables

| Variable                   | Description                        | Example                           | Required |
| -------------------------- | ---------------------------------- | --------------------------------- | -------- |
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL               | `http://192.168.4.11:8000/api/v1` | ✅       |
| `API_CLIENT_KEY`           | Server-side API authentication key | `web-12345`                       | ✅       |

### Environment Files

- `.env` - Local development (ignored by git)
- `.env.example` - Example configuration template

## 🗂 Project Structure

```
newsportal-frontend/
├── public/                          # Static assets
│   ├── assets/                      # Application assets
│   │   ├── fallback.webp          # Default fallback image
│   │   ├── adImages/               # Advertisement images
│   │   └── icons/                  # Social media icons
│   └── fonts/                      # Custom font files
│       ├── SutonnyMJBold.ttf      # Bengali bold font
│       └── SutonnyMJRegular.ttf   # Bengali regular font
├── src/
│   ├── app/                        # Next.js App Router (Pages)
│   │   ├── (routes)/               # Route groups
│   │   │   ├── about/              # About page
│   │   │   ├── account/            # User account page
│   │   │   ├── article/[id]/       # Dynamic article pages
│   │   │   ├── auth/               # Authentication pages
│   │   │   │   ├── signin/         # Sign in page
│   │   │   │   ├── signup/         # Sign up page
│   │   │   │   ├── forgetpassword/ # Password reset
│   │   │   │   ├── resetpassword/  # New password setup
│   │   │   │   └── otp/            # OTP verification
│   │   │   ├── category/[id]/      # Dynamic category pages
│   │   │   ├── news/[id]/          # News detail pages
│   │   │   ├── reels/              # Reels/short videos
│   │   │   ├── videos/             # Video gallery
│   │   │   ├── privacy-policy/     # Privacy policy
│   │   │   └── terms-and-conditions/ # Terms page
│   │   ├── api/                    # API routes (Proxy layer)
│   │   │   └── articles/
│   │   │       └── category/       # Category API proxy
│   │   ├── globals.css             # Global styles
│   │   ├── layout.js               # Root layout component
│   │   └── page.js                 # Homepage
│   ├── components/                 # React components
│   │   ├── common/                 # Shared components
│   │   │   ├── AudioPlayer.jsx     # Audio playback component
│   │   │   ├── BannerNews.jsx      # Banner news display
│   │   │   ├── CategoryTitle.jsx   # Category section title
│   │   │   ├── Container.jsx       # Layout container
│   │   │   ├── FeaturedNewsCard.jsx # Featured news card
│   │   │   ├── NewsCard.jsx        # Standard news card
│   │   │   ├── ReelCard.jsx        # Reel/short video card
│   │   │   ├── SectionTitle.jsx    # Section headings
│   │   │   ├── VideoCard.jsx       # Video card component
│   │   │   ├── VideoGallery.jsx    # Video gallery component
│   │   │   └── AdBanners/          # Advertisement components
│   │   │       ├── LongAdBanner.jsx    # Long banner ads
│   │   │       ├── RecAdBanner.jsx     # Rectangle ads
│   │   │       ├── SmallRecAdBanner.jsx # Small rectangle ads
│   │   │       └── SquareAd.jsx        # Square ad format
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.jsx          # Site header
│   │   │   ├── Footer.jsx          # Site footer
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── TopAppBar.jsx       # Top application bar
│   │   │   └── FeaturedNavs.jsx    # Featured navigation items
│   │   ├── pages/                  # Page-specific components
│   │   │   ├── article/            # Article page components
│   │   │   │   ├── ArticleBody.jsx     # Article content
│   │   │   │   ├── ImageCarousel.jsx   # Image gallery
│   │   │   │   ├── RelatedNews.jsx     # Related articles
│   │   │   │   ├── ShareOptions.jsx    # Social sharing
│   │   │   │   └── VideoCarousel.jsx   # Video gallery
│   │   │   ├── category/           # Category page components
│   │   │   │   └── CategoryPageClient.jsx # Client-side pagination
│   │   │   ├── home/               # Homepage components
│   │   │   │   ├── BreakingNews.jsx     # Breaking news section
│   │   │   │   ├── LatestNews.jsx       # Latest news section
│   │   │   │   ├── LocalNewsFilter.jsx  # Location-based filter
│   │   │   │   ├── ReelsCarousel.jsx    # Reels carousel
│   │   │   │   ├── SpecialFeatured.jsx  # Special featured content
│   │   │   │   ├── SpecialNews.jsx      # Special news section
│   │   │   │   └── SpecialNewsSmallCard.jsx # Compact news cards
│   │   │   └── reels/              # Reels page components
│   │   │       └── ReelsPageClient.jsx  # Client-side reels
│   │   ├── ui/                     # UI component library
│   │   │   ├── button.jsx          # Button component
│   │   │   ├── input.jsx           # Input field component
│   │   │   ├── label.jsx           # Label component
│   │   │   ├── select.jsx          # Select dropdown
│   │   │   ├── checkbox.jsx        # Checkbox component
│   │   │   ├── input-otp.jsx       # OTP input component
│   │   │   ├── card.jsx            # Card component
│   │   │   ├── carousel.jsx        # Carousel component
│   │   │   ├── sheet.jsx           # Modal/drawer component
│   │   │   ├── slider.jsx          # Range slider
│   │   │   └── aspect-ratio.jsx    # Aspect ratio container
│   │   └── magicui/                # Advanced UI components
│   │       └── hero-video-dialog.jsx # Video dialog modal
│   └── lib/                        # Utility libraries
│       ├── fetchData.js            # API data fetching utilities
│       └── utils.js                # General utility functions
├── components.json                 # ShadCN/UI configuration
├── jsconfig.json                   # JavaScript configuration
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Project dependencies
├── postcss.config.mjs              # PostCSS configuration
└── README.md                       # Basic project readme
```

## 🌐 API Architecture

### Backend Integration

The application integrates with a backend API running on `http://192.168.4.11:8000/api/v1/`

### API Endpoints Used

```javascript
// Content Endpoints
GET /articles/single-lead-news       // Featured article
GET /articles/latest?page=1          // Latest articles
GET /articles/breaking-news?page=1   // Breaking news
GET /articles/exclusive?page=1       // Special/exclusive content
GET /articles/category/{id}?page=1   // Category-specific articles

// Media Endpoints
GET /reels/list?page=1              // Short video content
GET /videos/list?page=1             // Video gallery content

// Navigation Endpoints
GET /categories                     // Site navigation categories
```

### Data Fetching Strategy

#### Server-Side Fetching (`fetchData`)

```javascript
// Used in Server Components for initial page loads
const data = await fetchData("articles/latest?page=1", {
  revalidate: 10, // ISR: Revalidate every 10 seconds
  cache: "no-store", // or default caching
  tags: ["articles"], // Cache tags for on-demand revalidation
});
```

#### Client-Side Fetching (`fetchDataClient`)

```javascript
// Used in Client Components for dynamic content
const data = await fetchDataClient("articles/category/1?page=2", {
  headers: { "Custom-Header": "value" },
});
```

### API Proxy Layer

Client-side requests go through Next.js API routes for security:

```javascript
// src/app/api/articles/category/route.js
export async function GET(request) {
  // Proxy requests to backend with server-side authentication
  const response = await fetch(`${baseUrl}/articles/category/${categoryId}`, {
    headers: {
      "X-Client-Key": process.env.API_CLIENT_KEY,
      "Content-Type": "application/json",
    },
  });
  return NextResponse.json(await response.json());
}
```

## 🧱 Component Architecture

### Component Hierarchy

```
App Layout (layout.js)
├── Header
│   ├── TopAppBar (Search, Social Links)
│   ├── Navbar (Categories, Mobile Menu)
│   └── FeaturedNavs (Quick Navigation)
├── Main Content (pages)
│   ├── Server Components (Initial Data)
│   └── Client Components (Interactive Features)
└── Footer (Site Information)
```

### Component Types

#### Server Components (Default)

- **HomePage** - Initial data fetching
- **ArticlePage** - Article content rendering
- **CategoryPage** - Category content with initial data
- **VideoGallery** - Server-rendered video list

#### Client Components ("use client")

- **Navbar** - Interactive navigation with dropdowns
- **CategoryPageClient** - Client-side pagination
- **ReelsPageClient** - Interactive reels interface
- **Authentication Pages** - Form handling and validation

### State Management Patterns

#### Local State (useState)

```javascript
// Component-level state for UI interactions
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(false);
```

#### Form State (React Hook Form)

```javascript
// Form handling with validation
const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { email: "", password: "" },
});
```

#### Server State (Server Components)

```javascript
// Server-side data fetching
export default async function Page() {
  const data = await fetchData("endpoint");
  return <Component data={data} />;
}
```

## 🛣 Routing Structure

### Page Routes

| Route            | Component                    | Description                    | Type   |
| ---------------- | ---------------------------- | ------------------------------ | ------ |
| `/`              | `app/page.js`                | Homepage with featured content | Server |
| `/article/[id]`  | `app/article/[id]/page.jsx`  | Dynamic article pages          | Server |
| `/category/[id]` | `app/category/[id]/page.jsx` | Category pages with pagination | Hybrid |
| `/news/[id]`     | `app/news/[id]/page.jsx`     | News detail pages              | Server |
| `/auth/signin`   | `app/auth/signin/page.jsx`   | User sign in                   | Client |
| `/auth/signup`   | `app/auth/signup/page.jsx`   | User registration              | Client |
| `/auth/otp`      | `app/auth/otp/page.jsx`      | OTP verification               | Client |
| `/reels`         | `app/reels/page.jsx`         | Short video content            | Hybrid |
| `/videos`        | `app/videos/page.jsx`        | Video gallery                  | Server |
| `/about`         | `app/about/page.jsx`         | About page                     | Server |
| `/account`       | `app/account/page.jsx`       | User account management        | Client |

### API Routes

| Route                    | File                                 | Purpose                     |
| ------------------------ | ------------------------------------ | --------------------------- |
| `/api/articles/category` | `app/api/articles/category/route.js` | Proxy for category articles |

### Dynamic Route Parameters

```javascript
// app/article/[id]/page.jsx
export default async function ArticlePage({ params }) {
  const { id } = params; // Route parameter
  const article = await fetchData(`articles/${id}`);
  return <ArticleComponent article={article} />;
}
```

## 🔧 Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run dev:legacy   # Start development server with Webpack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

### Development Server Features

- **Hot Reload** - Instant updates on file changes
- **Turbopack** - Ultra-fast bundling (default)
- **Error Overlay** - Detailed error information
- **API Routes** - Built-in API development

### Code Structure Guidelines

#### File Naming Conventions

- **Components**: PascalCase (`NewsCard.jsx`)
- **Pages**: lowercase (`page.jsx`, `layout.js`)
- **Utilities**: camelCase (`fetchData.js`)
- **Constants**: UPPER_CASE (`API_ENDPOINTS.js`)

#### Import Organization

```javascript
// External libraries
import React from "react";
import Link from "next/link";

// Internal components
import Container from "@/components/common/Container";
import NewsCard from "@/components/common/NewsCard";

// Utilities and data
import { fetchData } from "@/lib/fetchData";
import { cn } from "@/lib/utils";
```

## 🚀 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Build Output

```
.next/
├── static/          # Static assets with hash
├── server/          # Server-side code
└── standalone/      # Self-contained deployment (if enabled)
```

## ⚡ Performance Features

### Next.js Optimizations

#### Incremental Static Regeneration (ISR)

```javascript
// Automatically revalidate pages every 10 seconds
const data = await fetchData("endpoint", { revalidate: 10 });
```

#### Image Optimization

```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "cdn.zzazzo.com",
        pathname: "/**",
      },
    ],
  },
};
```

#### Code Splitting

- Automatic route-based code splitting
- Dynamic imports for large components
- Client/Server component separation

### Performance Best Practices

#### Server Components (Default)

```javascript
// Renders on server, reduces client bundle
export default async function NewsPage() {
  const data = await fetchData("news");
  return <NewsList data={data} />;
}
```

#### Client Components (When Needed)

```javascript
// Only when interactivity is required
"use client";
export default function InteractiveComponent() {
  const [state, setState] = useState();
  return <div onClick={() => setState(!state)}>...</div>;
}
```

#### Font Optimization

```javascript
// app/layout.js
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### Bundle Analysis

```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# Add to next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

# Run analysis
ANALYZE=true npm run build
```

## 🔒 Security Considerations

### Current Security Measures

#### API Key Protection

```javascript
// Server-side only API keys
const response = await fetch(endpoint, {
  headers: {
    "X-Client-Key": process.env.API_CLIENT_KEY, // Server-side only
  },
});
```

#### Input Validation

```javascript
// Using Zod for validation
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

#### Environment Variables

```bash
# Public variables (exposed to browser)
NEXT_PUBLIC_API_BASE_URL=...

# Private variables (server-side only)
API_CLIENT_KEY=...
DATABASE_URL=...
```

### Security Recommendations

#### Content Security Policy (CSP)

```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
};
```

#### Rate Limiting

```javascript
// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Implement rate limiting logic
  return NextResponse.next();
}
```

### Security Checklist

- ✅ Environment variables properly configured
- ✅ API keys not exposed to client
- ❌ Add Content Security Policy headers
- ❌ Implement rate limiting
- ❌ Add CSRF protection
- ❌ Sanitize user inputs
- ❌ Add authentication middleware

### Code Style Guidelines

#### Component Structure

```javascript
// ComponentName.jsx
"use client"; // Only if client-side features needed

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ComponentName({ prop1, prop2, className, ...props }) {
  const [state, setState] = useState();

  return (
    <div className={cn("default-classes", className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

#### Commit Message Format

```
type(scope): description

feat(components): add new NewsCard component
fix(api): resolve authentication issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(utils): simplify date formatting function
test(components): add NewsCard test cases
```

### Pull Request Guidelines

1. **Clear Description** - Explain what changes were made and why
2. **Screenshots** - Include before/after images for UI changes
3. **Testing** - Ensure all existing functionality still works
4. **Documentation** - Update relevant documentation
5. **Performance** - Consider impact on bundle size and runtime performance

## 🚨 Troubleshooting

### Common Issues

#### Development Server Won't Start

**Problem**: `Error: Cannot find module 'next'`

```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Problem**: Port 3000 already in use

```bash
# Solution: Use different port
npm run dev -- -p 3001
```

#### Build Failures

**Problem**: `Module not found` errors

```bash
# Check import paths
# Ensure all files exist
# Verify jsconfig.json path mapping
```

**Problem**: `Out of memory` during build

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### API Connection Issues

**Problem**: API requests failing

```bash
# Check .env.local configuration
# Verify backend server is running
# Check network connectivity
# Verify API endpoints in fetchData.js
```

**Problem**: CORS errors

```bash
# Backend needs to allow frontend domain
# Check backend CORS configuration
# Use API proxy routes for development
```

#### Styling Issues

**Problem**: Tailwind classes not working

```bash
# Check postcss.config.mjs
# Verify Tailwind CSS installation
# Check components.json configuration
```

**Problem**: Custom fonts not loading

```bash
# Verify font files in public/fonts/
# Check globals.css font-face declarations
# Ensure proper font-display: swap
```

### Performance Issues

**Problem**: Slow page loads

- Check for large images without optimization
- Verify proper Server/Client component usage
- Use React DevTools to identify unnecessary re-renders

**Problem**: Large bundle sizes

- Run bundle analyzer: `ANALYZE=true npm run build`
- Check for unused dependencies
- Implement proper code splitting

### Debug Mode

```bash
# Enable Next.js debugging
DEBUG=* npm run dev

# Enable specific debug categories
DEBUG=next:* npm run dev
```

### Useful Tools

```bash
# Check bundle size
npm run build && npx bundlesize

# Analyze dependencies
npx depcheck

# Check for security vulnerabilities
npm audit

# Update dependencies
npx npm-check-updates -u
```

**Last Updated**: August 24, 2025  
**Version**: 1.1.0  
**Maintainer**: Zzazzo Development Team
