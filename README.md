# News Portal Frontend

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive news portal built with Next.js 15, React 19, and Tailwind CSS v4. Features server-side rendering, dynamic routing, and a comprehensive component architecture for displaying news articles, videos, and reels.

## ✨ Features

- 🏠 **Dynamic Homepage** with featured news, breaking news, latest articles
- 📰 **Article Management** with detailed content and related news
- 📂 **Category Pages** with pagination and filtering
- 🎬 **Video Gallery** with embedded video players
- 📱 **Reels Section** for short-form video content
- 👤 **Authentication System** (Sign in, Sign up, Password reset, OTP)
- 📱 **Fully Responsive** design for all devices
- ⚡ **Performance Optimized** with SSR and ISR

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Backend API running

### Installation

```bash
# Clone the repository
git clone https://github.com/zzazzo-limited/newsportal-frontend.git
cd newsportal-frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Environment Setup

Create a `.env.local` file in the root directory:

```env
# Required
NEXT_PUBLIC_API_BASE_URL=http://192.168.4.11:8000/api/v1
API_CLIENT_KEY=web-12345
```

## 📚 Documentation

For comprehensive documentation including architecture, API integration, deployment guides, and troubleshooting:

**📖 [Complete Project Documentation](./PROJECT_DOCUMENTATION.md)**

The documentation covers:

- 🏗️ **Project Architecture** - Component structure and patterns
- 🌐 **API Integration** - Backend connectivity and data fetching
- 🛣️ **Routing Structure** - All available routes and pages
- 🚀 **Deployment Guide** - Production deployment options
- ⚡ **Performance Optimization** - Best practices and configurations
- 🔒 **Security Guidelines** - Security measures and recommendations
- 🤝 **Contributing Guide** - Development workflow and guidelines
- 🚨 **Troubleshooting** - Common issues and solutions

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Frontend**: React 19.0.0
- **Styling**: Tailwind CSS v4, ShadCN/UI, Radix UI
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Custom Bengali typography (SutonnyMJ)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   ├── pages/            # Page-specific components
│   └── ui/               # UI component library
└── lib/                  # Utilities and shared logic
```

## 🚀 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Key Routes

| Route            | Description                    |
| ---------------- | ------------------------------ |
| `/`              | Homepage with featured content |
| `/article/[id]`  | Dynamic article pages          |
| `/category/[id]` | Category pages with pagination |
| `/auth/signin`   | User authentication            |
| `/reels`         | Short video content            |
| `/videos`        | Video gallery                  |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

See [Contributing Guidelines](./PROJECT_DOCUMENTATION.md#-contributing) for detailed information.

---

**Built with ❤️ by [Zzazzo Limited](https://github.com/zzazzo-limited)**
