# Wohnen Backend

Standalone Express 5, TypeScript and MongoDB API.

## Development

```bash
cp .env.example .env
npm install
npm run dev
```

The API runs at `http://localhost:4000`. MongoDB must be available through `MONGODB_URI`.

## Production

```bash
npm run build
npm run start
```

Set `WEB_ORIGIN` to the deployed frontend origin. Multiple origins can be supplied as a comma-separated list.
