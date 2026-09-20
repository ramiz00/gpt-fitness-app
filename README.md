# Stride — fitness tracking starter

Stride is a mobile-first fitness product starter for daily routines, Strava running imports, calorie and meal tracking, barcode scanning, and goals.

## Apps

- `apps/web` — Next.js marketing website and waitlist form.
- `apps/mobile` — Expo mobile prototype with an interactive daily dashboard.

## Run locally

```bash
npm install
npm run dev:web
npm run dev:mobile
```

The prototype uses local state and representative data. Production integrations should be implemented behind server-side API routes: Strava OAuth/webhooks, a food-data provider, and secure user storage.
