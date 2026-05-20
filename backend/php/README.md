# NetCulture PHP API Scaffold

This folder mirrors the production backend layer for the Next.js frontend.

Recommended production responsibilities:

- Secure admin authentication with password hashing, session rotation, CSRF protection, and rate limits.
- Lead capture API with validation, CRM routing, WhatsApp notifications, Calendly context, and conversion tracking.
- Portfolio, blog, media, testimonial, and SEO settings CRUD endpoints.
- Database architecture with normalized tables for users, roles, leads, assets, posts, projects, testimonials, and audit logs.
- JSON-only responses, strict CORS policy, prepared SQL statements, and structured logging.

The files in `api/` are intentionally compact starter endpoints. Wire them to PDO/MySQL, Redis, and a production auth layer before deployment.
