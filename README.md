# TODO

## Backend

- agregar servicio de jugador para devolver una lista de jugadores por dni y por deporte (puede ser que tambien sea busqueda por cualquier deporte) con paginado

## Front

- selector de deportes en pagina de jugadores
- paginado y busqueda de jugadores por deporte
- arreglar mostrar la foto en equipos

# Supabase

## Login

- `npx supabase login` => va a pedir un token que el admin debe dar

## Iniciar proyectos ya creados

### Iniciar/Parar docker

- `npx supabase start` o `npx supabase stop`

## Migraciones

### Crear migracion

- `npx supabase db diff -f <nombre_del_archivo>` => crea un nuevo archivo de migracion

### Observar cambios locales sin guardar en archivo

`npx supabase db diff --schema public`

### Aplciar migraciones locales

`npx supabase migration up`

### Deploy a DB remota

- `npx supabase db push` => debe estar previamente linkeado con el proyecto remoto

## Para crear proyectos supabase

### Crear proyecto local

- `npx supabase init` => podes crear o no un workspace

### Linkear con proyecto remoto

- `npx supabase link --project-ref [id-de-proyecto]` => va a pedir el password de la base de datos

# NextJs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
