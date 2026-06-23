# Backend - UQ AI Solution Company

Proyecto Spring Boot 3 con H2, JWT, bcrypt y endpoints protegidos por rol.

## Ejecutar

En IntelliJ abre esta carpeta como proyecto Maven y ejecuta `BackendApplication`.

Por terminal:

```bash
mvn spring-boot:run
```

El backend abre en `http://localhost:8080`.

## Usuarios de prueba

| Rol | Email | Password |
| --- | --- | --- |
| ADMIN | admin@uqai.pe | Admin12345 |
| USER | user@uqai.pe | User12345 |

## Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/usuarios` solo ADMIN
- `GET /api/usuarios/{id}` ADMIN o el mismo USER
- `POST /api/leads` publico
- `GET /api/leads` solo ADMIN

## H2

- Consola: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:BD_paredes_becerra_anggie_marisol_T1`
- Usuario: `sa`
- Password: vacio

## Datos personalizados

Proyecto configurado para: Paredes Becerra Anggie Marisol.

## Deploy en Render

- Root Directory: `T_Paredes_Becerra_Anggie_Marisol_backend`
- Build Command: `mvn clean package -DskipTests`
- Start Command: `java -jar target/T_Paredes_Becerra_Anggie_Marisol_backend-0.0.1-SNAPSHOT.jar`

Variables:

```bash
JWT_SECRET=pon_aqui_una_clave_larga_de_32_caracteres_o_mas
JWT_EXPIRATION=86400000
CORS_ALLOWED_ORIGINS=https://TU-FRONTEND.vercel.app,https://*.vercel.app
```
