# Proyecto UQ AI Solution Company

Entregable revisado para Paredes Becerra Anggie Marisol.

## Carpetas

- `uq-ai-frontend`: Next.js 14 + TypeScript + Tailwind CSS.
- `T_Paredes_Becerra_Anggie_Marisol_backend`: Spring Boot 3 + Security + JWT + H2 + JPA.

## Personalizacion verificada

- Backend: `T_Paredes_Becerra_Anggie_Marisol_backend`.
- Base H2: `BD_paredes_becerra_anggie_marisol_T1`.
- Usuarios semilla: ADMIN y USER.

## Abrir backend en IntelliJ

1. Abrir IntelliJ IDEA.
2. File > Open.
3. Seleccionar la carpeta `T_Paredes_Becerra_Anggie_Marisol_backend`.
4. Esperar que Maven importe dependencias.
5. Ejecutar `BackendApplication`.

Tambien se puede ejecutar por terminal:

```bash
cd T_Paredes_Becerra_Anggie_Marisol_backend
mvn spring-boot:run
```

Backend local: `http://localhost:8080`

H2:

- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:BD_paredes_becerra_anggie_marisol_T1`
- User: `sa`
- Password: vacio

## Abrir frontend en VS Code y Git Bash

1. Abrir VS Code.
2. File > Open Folder.
3. Seleccionar la carpeta `uq-ai-frontend`.
4. En Git Bash, entrar a la carpeta:

```bash
cd /c/Users/dvc_proyecto05/Documents/Codex/2026-06-22/es/outputs/uq-ai-project-paredes-ready/uq-ai-frontend
```

Como en esta PC `npm` no esta en el PATH de Git Bash, usa el `pnpm.cmd` completo:

```bash
"/c/Users/dvc_proyecto05/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm.cmd" install --ignore-scripts
cp .env.example .env.local
"/c/Users/dvc_proyecto05/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm.cmd" dev
```

Frontend local: `http://localhost:3000`

Si luego instalas Node.js normal, tambien sirven:

```bash
npm install
npm run dev
```

## Usuarios de prueba

| Rol | Email | Password |
| --- | --- | --- |
| ADMIN | admin@uqai.pe | Admin12345 |
| USER | user@uqai.pe | User12345 |

## Pruebas realizadas

- Backend compila con `mvn test`.
- Backend arranca en `http://localhost:8080`.
- Login ADMIN correcto.
- Login USER correcto.
- `POST /api/leads` publico correcto.
- `GET /api/leads` con ADMIN correcto.
- `GET /api/usuarios` con ADMIN correcto.
- `GET /api/leads` con USER devuelve `403`, correcto por RBAC.
- Frontend pasa `pnpm lint`.
- Frontend pasa `pnpm build`.

## Deploy frontend en Vercel

1. Subir el proyecto a GitHub.
2. En Vercel, importar el repositorio.
3. Configurar Root Directory: `uq-ai-frontend`.
4. Build command: `pnpm build` o `npm run build`.
5. Output: Next.js automatico.
6. Variable de entorno:

```bash
NEXT_PUBLIC_API_URL=https://TU-BACKEND.onrender.com
```

## Deploy backend recomendado: Render

Render es una buena opcion para este Spring Boot porque permite desplegar repositorios Java/Maven de forma sencilla.

Configuracion sugerida:

- Root Directory: `T_Paredes_Becerra_Anggie_Marisol_backend`
- Build Command: `mvn clean package -DskipTests`
- Start Command: `java -jar target/T_Paredes_Becerra_Anggie_Marisol_backend-0.0.1-SNAPSHOT.jar`
- Runtime: Java 17 o superior.

Variables de entorno:

```bash
JWT_SECRET=pon_aqui_una_clave_larga_de_32_caracteres_o_mas
JWT_EXPIRATION=86400000
CORS_ALLOWED_ORIGINS=https://TU-FRONTEND.vercel.app,https://*.vercel.app
```

El backend ya usa `server.port=${PORT:8080}`, por eso puede tomar el puerto que Render asigne.

## Video de evidencia

En menos de 5 minutos:

1. Mostrar sitio desde Vercel.
2. Crear lead desde formulario publico.
3. Login ADMIN y ver dashboard con leads.
4. Login USER y comprobar acceso limitado.
5. Entrar a `/dashboard` sin login y ver redireccion.
6. Logout y cookie eliminada.
