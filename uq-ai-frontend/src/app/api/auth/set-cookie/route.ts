import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { token, user } = body;

  if (!token || !user) {
    return NextResponse.json({ message: "Token invalido" }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });

  // No usamos localStorage porque JavaScript podria leer el JWT si ocurre un ataque XSS.
  response.cookies.set("uqai_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/"
  });

  response.cookies.set("uqai_user", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/"
  });

  return response;
}
