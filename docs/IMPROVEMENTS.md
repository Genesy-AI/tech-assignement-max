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

### 4. Temporal Connection Management

- **Problem:** New connections per workflow → overhead.
- **Solution:** Singleton client, pooling, health checks, graceful shutdown.
- **Benefit:** Faster workflows, lower resource use, better resilience.

---

## Priority 2 – Medium Impact

5. **API Testing** – Add integration tests + fixtures for endpoints.
6. **Frontend Component Testing** – Add React Testing Library coverage for key flows.
7. **Optimize State Management** – React Query optimizations, memoization, loading states.

---

## Priority 3 – Lower Impact

8. **Dockerize** – Add Dockerfiles and docker-compose for improved local development and also production deploys.
9. **Feature flags** – Safer rollouts, easier A/B testing, incremental delivery
10. **Monitoring** – Implement sentry to gain observability on production errors
11. **Security** – Rate limiting, CORS, sanitization, headers
12. **API Docs** - Generate Open API docs
