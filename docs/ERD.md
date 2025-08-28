# QuickFix — ERD (Draft)

```mermaid
erDiagram
  USER ||--o{ ARTISAN_PROFILE : may_have
  USER ||--o{ REVIEW : writes
  USER ||--o{ JOB : requests
  ARTISAN_PROFILE ||--o{ SERVICE_OFFERING : provides
  ARTISAN_PROFILE ||--o{ JOB : fulfills
  ARTISAN_PROFILE ||--o{ RATING : receives
  SERVICE_CATEGORY ||--o{ SERVICE_OFFERING : groups
  JOB ||--o{ JOB_EVENT : has
  JOB ||--o{ RATING : results_in
  ARTISAN_PROFILE ||--o{ PAYOUT_ACCOUNT : owns
  ARTISAN_PROFILE ||--o{ PAYOUT : paid
  JOB ||--o{ DISPUTE : may_have

  USER {
    uuid id PK
    string email UK
    string password_hash
    string role "seeker|artisan|admin"
    string full_name
    string phone
    string city
    timestamp created_at
    timestamp updated_at
  }

  ARTISAN_PROFILE {
    uuid id PK
    uuid user_id FK
    string display_name
    string bio
    float average_rating
    int rating_count
    string status "pending|approved|suspended"
    geometry location "POINT(lat, lng)"
    timestamp created_at
    timestamp updated_at
  }

  SERVICE_CATEGORY {
    uuid id PK
    string name
    string slug UK
    timestamp created_at
  }

  SERVICE_OFFERING {
    uuid id PK
    uuid artisan_id FK
    uuid category_id FK
    string title
    text description
    int base_price_minor "e.g. cents"
    string currency
    boolean available
  }

  JOB {
    uuid id PK
    uuid seeker_id FK "USER.id"
    uuid artisan_id FK "ARTISAN_PROFILE.id"
    uuid category_id FK
    geometry start_location
    string status "requested|quoted|accepted|in_progress|completed|cancelled"
    int quote_price_minor
    string currency
    timestamp scheduled_for
    timestamp created_at
    timestamp updated_at
  }

  JOB_EVENT {
    uuid id PK
    uuid job_id FK
    string type "requested|quoted|accepted|arrived|started|completed|cancelled"
    json meta
    timestamp created_at
  }

  RATING {
    uuid id PK
    uuid job_id FK
    uuid reviewer_id FK "USER.id"
    uuid artisan_id FK
    int stars "1..5"
    string comment
    timestamp created_at
  }

  PAYOUT_ACCOUNT {
    uuid id PK
    uuid artisan_id FK
    string provider "stripe"
    string provider_account_id
    boolean default
    timestamp created_at
  }

  PAYOUT {
    uuid id PK
    uuid artisan_id FK
    uuid job_id FK
    int amount_minor
    string currency
    string status "pending|paid|failed"
    timestamp created_at
  }

  DISPUTE {
    uuid id PK
    uuid job_id FK
    uuid raised_by FK "USER.id"
    string status "open|in_review|resolved|rejected"
    text reason
    text resolution
    timestamp created_at
    timestamp updated_at
  }
```

Notes:

- Monetary amounts stored in minor units (e.g., kobo/cents).
- `geometry` assumes PostGIS; fallback to `decimal lat/lng` if needed.
- `RATING` references both `job_id` and `artisan_id` for analytics.
- Stripe Connect recommended for payouts (see `PAYOUT_ACCOUNT`).
