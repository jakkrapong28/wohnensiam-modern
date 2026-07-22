# Wohnen Frontend

Standalone Next.js 16 App Router application.

## Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_API_URL` to the public URL of the separately deployed backend. The Next.js configuration produces standalone server output for independent deployment.
