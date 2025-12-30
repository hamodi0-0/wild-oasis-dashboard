# The Wild Oasis - Hotel Management System

Internal dashboard for hotel staff to manage cabins, bookings, check-ins, and hotel settings.

## Overview

- Dashboard with analytics and charts
- Cabin management (create, edit, delete, filter, sort)
- Booking management with guest details
- Check-in/out operations
- User account management
- Hotel settings configuration
- User management
- Dark mode toggle

## Tech Stack

- React 18, React Router v6
- TanStack React Query for data fetching and state
- Supabase for auth and database
- Styled Components
- React Hook Form
- Recharts for charts
- Vite

## Setup

1. Install dependencies: `npm install`
2. Create `.env.local` with Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```
3. Run dev server: `npm run dev`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview build locally
- `npm run lint` - Check code quality

## Authentication

Email/password login via Supabase. Sessions persist across page reloads. Protected routes redirect unauthenticated users to login. Admins can create new staff accounts.

Built on [Jonas Schmedtmann's](https://www.udemy.com/share/108PTo3@tGrksYT4pgAlrG0RIllUBmI6n8CQSYxMwK54ZpL3DKikdRJKc_epehx6NC9NlJSnCA==/) React course on Udemy
