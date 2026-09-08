import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/login";
  const isProtectedRoute =
    pathname.startsWith("/browse") ||
    pathname.startsWith("/search") ||
    pathname.startsWith("/profile");

  // User is logged out
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // User is already logged in
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/browse", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/browse/:path*", "/search/:path*", "/profile/:path*"],
};
