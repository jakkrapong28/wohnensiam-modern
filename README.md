# Wohnen Modern

A modern rebuild of the Wohnen Co., Ltd. website. The frontend and backend are independent applications that can be developed together or deployed separately.

## Stack

- Next.js 16 App Router, React 19 and TypeScript
- Express 5 API
- MongoDB and Mongoose
- Zod request validation
- Helmet, CORS and Morgan
- 12 locales with persistent language selection and Arabic RTL support

## Project structure

- `frontend/` — standalone Next.js application, UI, SEO, routes and localized content
- `backend/` — standalone Express application, MongoDB/Mongoose and inquiry API

Each application has its own `package.json`, lockfile, environment example and production start command. The root package only provides convenience commands for running both projects together.

## Local development

Run each project independently, exactly like two separate repositories.

### Frontend terminal

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend terminal

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Make sure MongoDB is running locally, or replace `MONGODB_URI` with a MongoDB Atlas connection string. The website runs at `http://localhost:3000` and the API at `http://localhost:4000`.

The root `package.json` is optional convenience tooling. After installing root dependencies, `npm run dev` starts both applications together.

## Separate deployment

### Frontend

- Deployment root: `frontend/`
- Build command: `npm run build`
- Start command: `npm run start`
- Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.
- `next.config.ts` uses Next.js standalone output for Docker, Node hosting or Vercel-compatible deployment.

### Backend

- Deployment root: `backend/`
- Build command: `npm run build`
- Start command: `npm run start`
- Set `MONGODB_URI`, `WEB_ORIGIN` and optionally `API_PORT`.
- `WEB_ORIGIN` accepts multiple comma-separated frontend origins.

## Production checks

- `npm run build`
- `npm test`
- `npm run typecheck`
- `npm run lint`

## Architecture notes

- Shared site chrome keeps navigation, locale selection and footer behavior consistent across routes.
- Locale changes update in place without a full-page reload or scroll reset.
- The inquiry form owns its request lifecycle and is reused on both the home and contact pages.
- Zod is the API boundary: submitted data is normalized and validated before it reaches Mongoose.
- API contract tests use Node's built-in test runner through `tsx`, keeping the setup lightweight.

## Inquiry endpoint

`POST /api/inquiries`

```json
{
  "name": "Jane Buyer",
  "email": "jane@example.com",
  "company": "Example Industries",
  "interest": "Antimony supply",
  "message": "We need to discuss specifications and delivery timing."
}
```
# wohnensiam-modern
