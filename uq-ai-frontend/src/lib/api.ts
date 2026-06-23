export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export type AuthUser = {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  rol: "ADMIN" | "USER";
  area: string;
};

export type AuthResponse = AuthUser & {
  token: string;
};

export type Lead = {
  id: number;
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
  fechaRegistro: string;
};
