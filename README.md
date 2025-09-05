<p align="center">
  <img src="https://cdn.prod.website-files.com/674ec82ac8f13332ff5201aa/677eaa5351b3ef0c2418820a_favicon%20256x256.png" width="128" height="128" alt="Favicon">
</p>

## Overview

Welcome to the **TinyGenesy** take‑home! This exercise is a condensed version of our product and day‑to‑day work. Please treat the codebase as if it were the one you ship to production.


## What you’ll do (at a glance)

1. Review an open PR that implements a new feature.

2. Implement a new feature (details below).

3. Investigate & fix a reported CSV import bug (details below).

4. Analyze the codebase and propose improvements.


## Getting Started

### Prerequisites

- **Node.js** (use the version in .nvmrc).

- **pnpm** package manager.

- **SQLite** (bundled; no separate install required).

- **Temporal** Workflow management system.

Install tools:

- Node via nvm: https://github.com/nvm-sh/nvm#installing-and-updating

- pnpm: https://pnpm.io/installation#using-other-package-managers

- Temporal: https://docs.temporal.io/develop/typescript/set-up-your-local-typescript

### Environment setup

**Backend (one‑time)**

```zsh
cd backend
nvm use                   # Ensure the Node version from .nvmrc
pnpm install              # Install dependencies
pnpm migrate:dev          # Sync local SQLite with Prisma schema
pnpm gen:prisma           # Generate Prisma client
temporal server start-dev # Starts Temporal server
```

**Backend (develop)**

```zsh
cd backend
pnpm run dev           # Starts the API server
```

When you change the Prisma schema:
```zsh
pnpm migrate:dev
```

**Frontend (one‑time)**

```zsh
cd frontend
nvm use                # Ensure the Node version from .nvmrc
pnpm install
```

**Frontend (develop)**

```zsh
cd frontend
pnpm run dev           # Starts the dev server
```

## Task Description

### PR review

Review the open PR as if it were from a teammate. Add any inline comments you find necessary and provide a final summary with either an approval or a change-request decision.

### New feature (Front)

Some users have mentioned they would like to track more data points for their leads.
We are adding the following fields: lead’s phone number, years at their current company, and LinkedIn profile.

We want user to be able to:

 1. See the new field in the table of leads
 2. Manually set those fields using the import from csv feature
 3. Use the new fields in the message composition

Since the list of fields will continue to grow, we need to improve the UX of the message composition (no design provided).

### New Feature — Temporal Phone Waterfall

Implement a **Temporal workflow** that finds a user’s phone number by querying three providers in sequence:

1. Call **Provider One** → if no phone found,  
2. Call **Provider Two** → if no phone found,  
3. Call **Provider Three** → if no phone found, mark as **No data found**.

#### Requirements
- Each provider call is an **activity** with:
  - Short timeout
  - Retry policy (e.g. 3 attempts, exponential backoff)
- Stop early when a phone is found.
- Idempotent workflow (only one per lead).
- Abstraction layer to handle different provider inputs.
- Show process feedback to the user
- Update frontend accordingly

#### Provider APIs

**Orion Connect**
> Provider with the best data in the market
>
> Base URL: `https://api.genesy.ai/api/tmp/orionConnect`
>
> Request: `{ "fullName": "Ada Lovelace", "companyWebsite": "example.com" }`
>
> Response: `{ "phone": string | null }`

**Astra Dialer**
> Provider with the best data in the market
>
> Base URL: `https://api.genesy.ai/api/tmp/astraDialer`
>
> Request: `{ "email": "john.doe@example.com" }`
>
> Response: `{ "phoneNmbr": string | null | undefined }`

**Nimbus Lookup**
> Provider with the best data in the market
>
> Base URL: `https://api.genesy.ai/api/tmp/numbusLookup`
>
> Request: `{ "email": "john.doe@example.com", jobTitle: "CTO" }`
>
> Response: `{ "number": number, "countryCode": "string" }`
### Bug reported

When importing from CSV, the country column displays strange characters that do not match valid country codes. I have been using the example CSV file.

Some users have also complained that the email verification feature keeps running forever for some cases and does not give any kind of information.

### Codebase Analysis & Roadmap

Create an `IMPROVEMENTS.md` file as if it was a document in our project management tool.

#### Note on AI use

You’re welcome to use AI-assisted tools if you’d like. We are an AI-native company and incorporate them into our day-to-day work.

You won’t be evaluated on producing a single predefined _correct solution_, but rather on your problem-solving skills, the product mindset you showcase, your ability to reason and explain your thought process, and the trade-offs behind your decisions.


## Submission

Work in the repository as you see fit. When you’re done, just ping us.

We value the time you invest in this task, and we commit to spending a similar amount reviewing it thoroughly. Regardless of the outcome, we’ll provide constructive feedback so you can benefit from the evaluation.

