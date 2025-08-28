# QuickFix — API Contracts (Draft)

Base URL: `/api/v1`
Auth: Bearer JWT (access token); refresh flow supported.

## Auth

- POST `/auth/register` — create account

```json
{
  "email": "user@example.com",
  "password": "secret",
  "fullName": "Ada Obi",
  "role": "seeker"
}
```

- POST `/auth/login` — get tokens

```json
{ "email": "user@example.com", "password": "secret" }
```

- POST `/auth/refresh`

```json
{ "refreshToken": "..." }
```

- GET `/auth/me` — current user

## Users

- GET `/users/:id`
- PATCH `/users/:id`

```json
{ "fullName": "Ada Obi", "phone": "+2348012345678", "city": "Lagos" }
```

## Artisans

- POST `/artisans` — create/update artisan profile (auth required, role: artisan)

```json
{
  "displayName": "Ade the Plumber",
  "bio": "10y exp.",
  "lat": 6.5244,
  "lng": 3.3792
}
```

- GET `/artisans/:id`
- GET `/artisans?lat=..&lng=..&radiusKm=5&categoryId=..&sort=distance|rating`
- POST `/artisans/:id/offerings` — add service offering

```json
{
  "categoryId": "uuid",
  "title": "Pipe fix",
  "description": "",
  "basePriceMinor": 150000,
  "currency": "NGN",
  "available": true
}
```

- GET `/artisans/:id/offerings`

## Service Categories

- GET `/categories` — list categories
- POST `/categories` (admin)

```json
{ "name": "Plumbing", "slug": "plumbing" }
```

## Jobs

- POST `/jobs` — create job request (seeker)

```json
{ "categoryId": "uuid", "lat": 6.52, "lng": 3.37, "scheduledFor": null }
```

- GET `/jobs/:id`
- GET `/jobs?role=seeker|artisan&status=...`
- POST `/jobs/:id/quote` (artisan)

```json
{ "quotePriceMinor": 200000, "currency": "NGN" }
```

- POST `/jobs/:id/accept` (artisan)
- POST `/jobs/:id/start` (artisan)
- POST `/jobs/:id/complete` (artisan)
- POST `/jobs/:id/cancel` (seeker|artisan)

### Job Events

- GET `/jobs/:id/events`

## Matching

- GET `/matching/suggest?lat=..&lng=..&categoryId=..&limit=10`
  Response ranks artisans by proximity, rating, availability.

## Reviews

- POST `/reviews` (seeker)

```json
{ "jobId": "uuid", "artisanId": "uuid", "stars": 5, "comment": "Great job!" }
```

- GET `/artisans/:id/reviews`

## Payments

- POST `/payments/intent` — create payment intent for job

```json
{ "jobId": "uuid", "amountMinor": 200000, "currency": "NGN" }
```

- POST `/webhooks/stripe` — Stripe webhook endpoint

## Admin

- GET `/admin/artisans?status=pending`
- POST `/admin/artisans/:id/approve`
- POST `/admin/artisans/:id/suspend`
- GET `/admin/metrics?from=..&to=..`

## Common Responses

```json
// success
{ "ok": true, "data": { ... } }

// error
{ "ok": false, "error": { "code": "VALIDATION_ERROR", "message": "..." } }
```

## Notes

- All monetary values are minor units.
- Geo queries require lat/lng; server computes distance with PostGIS (fallback: Haversine).
- Authz: role guards on artisan/admin endpoints.
- Rate limiting on public endpoints.
