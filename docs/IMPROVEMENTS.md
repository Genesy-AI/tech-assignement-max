# Codebase Improvements Roadmap

This document outlines the most impactful improvements to enhance TinyGenesy’s codebase. Items are ranked by impact on quality, productivity, and reliability.

---

## Priority 1 – High Impact

### 1. Refactor Monolithic Controller

- **Problem:** 397-line `index.ts` with all routes → hard to maintain.
- **Solution:** Split into modules (`/routes/leads.ts`, `/routes/health.ts`), introduce service layer + DI.
- **Benefit:** Lower complexity, easier testing, clearer structure.

### 2. Centralized Error Handling

- **Problem:** Scattered try/catch, inconsistent responses.
- **Solution:** Add Express error middleware, standard response format, structured logging.
- **Benefit:** Consistent errors, easier debugging, improved security.

### 3. Unified Request Validation

- **Problem:** Mixed manual checks + Zod.
- **Solution:** Standardize on Zod schemas + middleware.
- **Benefit:** Type safety, consistent messages, fewer runtime errors.

### 4. Implement DDD + Hexagonal Architecture

- **Problem:** Current codebase mixes business logic, infrastructure, and API layers, making it harder to test, extend, and maintain.
- **Solution:** Refactor the core backend using Domain-Driven Design (DDD) principles and Hexagonal Architecture (ports & adapters). This separates domain logic from infrastructure concerns (databases, APIs, frameworks).
- **Benefit:**
  - Clear separation of concerns → easier testing and maintenance.
  - Business rules become framework-agnostic → easier to evolve or migrate.
  - Simplifies onboarding for new developers and improves long-term code quality.

---

## Priority 2 – Medium Impact

5. **API Testing** – Add integration test for endpoints and e2e tests.
6. **Frontend Component Testing** – Add React Testing Library coverage for key flows.
7. **Dockerize** – Add Dockerfiles and docker-compose for improved local development and also production deploys.

---

## Priority 3 – Lower Impact

8. **Feature flags** – Safer rollouts, easier A/B testing, incremental delivery
9. **Monitoring** – Implement sentry to gain observability on production errors
10. **Security** – Rate limiting, CORS, sanitization, headers
11. **API Docs** - Generate Open API docs
