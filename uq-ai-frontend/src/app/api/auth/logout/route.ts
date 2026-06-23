import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url), { status: 303 });
  response.cookies.set("uqai_token", "", { httpOnly: true, maxAge: 0, path: "/" });
  response.cookies.set("uqai_user", "", { httpOnly: true, maxAge: 0, path: "/" });
  return response;
}
