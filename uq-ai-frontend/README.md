# Frontend - UQ AI Solution Company

Proyecto Next.js 14 con TypeScript, Tailwind CSS, landing page, login seguro, cookie HttpOnly y dashboard con RBAC.

## Ejecutar

```bash
"/c/Users/dvc_proyecto05/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm.cmd" install --ignore-scripts
cp .env.example .env.local
"/c/Users/dvc_proyecto05/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm.cmd" dev
```

Abre `http://localhost:3000`.

Si tienes Node.js instalado en el PATH, tambien puedes usar `npm install` y `npm run dev`.

## Variables

Crea `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

En Vercel usa `NEXT_PUBLIC_API_URL` con la URL publica del backend.

## Seguridad implementada

- JWT guardado en cookie HttpOnly desde Route Handler.
- No se usa localStorage porque puede exponerse ante XSS.
- Cookie SameSite Strict y Secure en produccion.
- Middleware protege `/dashboard` y `/admin`.
- Login con mensaje generico, loading state y bloqueo de 30 segundos tras 3 intentos fallidos.
- Logout elimina la cookie desde el servidor.
