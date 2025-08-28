# QuickFix — Implementation Plan

## Phase 0 — Define MVP (1–2 days)

- Objectives: On‑demand artisan discovery and booking in one pilot city.
- Personas:
  - Seeker: find artisan, book, pay, review.
  - Artisan: accept jobs, track, get paid.
  - Admin: verify artisans, resolve disputes, monitor metrics.
- Success metrics: waitlist signups, first bookings, job completion rate, NPS.

## Phase 1 — Brand and Design System (1–3 days)

- Brand: logo, color palette, typography, tone of voice.
- Tailwind tokens: colors, spacing, shadows, radii, typography scale.
- UI components: navbar, buttons, inputs, cards, modals, stepper, toasts.

## Phase 2 — Marketing Website (2–4 days)

- Pages: Home, Features, How it works, Contact, Privacy, Terms.
- Current site: migrate Tailwind CDN → build pipeline (when npm allowed), add SEO (title/desc, OG/Twitter), analytics.
- Waitlist: Google Forms integration (already wired). Add consent banner.
- Demo: “Find artisans near me” (Mapbox/Leaflet with mocked data, proximity list + pins).

## Phase 3 — Backend Architecture (2–4 days)

- Data model (Postgres + Prisma):
  - User, ArtisanProfile, ServiceCategory, ServiceOffering, Job, JobEvent, Rating, Payout, PayoutAccount, Dispute.
- Services: Auth, Profile, Matching, Booking, Payments, Reviews, Support.
- APIs: REST/GraphQL, versioning, rate‑limits, OpenAPI docs.
- Matching: geo distance + availability + rating + response‑time weighting.

## Phase 4 — Backend Setup (3–6 days)

- Stack: Node + NestJS (or Express), Prisma, Postgres, Docker Compose.
- Migrations + seed data, health checks.
- Auth: JWT (access + refresh), role guard (seeker/artisan/admin).
- Storage: S3‑compatible for images (Cloudflare R2/S3).
- Notifications: Email (Resend/SendGrid), SMS (Twilio), push (Expo later).
- Payments: Stripe (Connect for artisan payouts).

## Phase 5 — Core Backend Features (4–10 days)

- Users: register/login, profile, KYC onboarding (artisans).
- Services: categories, search.
- Jobs: create, quote, accept, start, complete, pay, review.
- Matching endpoints + ranking.
- Webhooks: Stripe, email events; error logging.
- Admin: verify artisans, disputes, metrics.

## Phase 6 — Mobile App (React Native/Expo) (7–14 days)

- Onboarding: auth + location permissions.
- Browse: categories, nearby artisans, profiles, reviews.
- Booking: request → quote/accept → tracking → payment → rating.
- Live: location tracking (Expo Location), chat (Stream/Ably), push (Expo).
- Payments: Stripe RN SDK (payment intent → confirm → payout).

## Phase 7 — Admin Dashboard (3–7 days)

- React + Tailwind app: artisan verification, reviews moderation, disputes, KPIs.
- Role‑based access, audit logs.

## Phase 8 — DevOps, Observability, Compliance (3–7 days)

- CI/CD: GitHub Actions, environments, preview deploys.
- Monitoring: Sentry, structured logs, uptime checks.
- Security: Helmet/CORS, secrets vault, backups, least‑privilege.
- Legal: Privacy Policy, Terms, data retention, PII handling.

## Phase 9 — Pilot Launch (1–2 weeks)

- City rollout using waitlist; staged invites.
- Support playbooks and feedback loops (surveys, session replay).
- Iterate on matching weights, pricing, onboarding.

---

### Immediate Next Steps

1. Lock design tokens and replace Tailwind CDN with build (when npm allowed).
2. Add interactive map demo on the website (mock data, proximity sort).
3. Draft ERD and API contracts for Users, Services, Jobs, Matching.
4. Initialize backend repo (NestJS + Prisma + Postgres), auth skeleton.

### Tech Choices

- Web: React + Vite + Tailwind, Headless UI where helpful.
- Mobile: React Native + Expo.
- Backend: Node + NestJS, Prisma, Postgres, Redis (caching/queues later).
- Cloud: Render/Fly/Railway for API + DB (or AWS), Cloudflare R2 for assets.
- Payments: Stripe; Notifications: SendGrid/Resend + Twilio; Analytics: Plausible.

### Tracking & Governance

- Issue tracker: GitHub Projects/Linear with phases mapped to milestones.
- Branching: trunk‑based with PR reviews; conventional commits; semantic release.
- Quality: ESLint, Prettier, type‑checks, e2e smoke tests.
