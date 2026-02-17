import { auth0 } from "@/lib/auth0"; // Path to your Auth0Client instance
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // This single line handles login, logout, callback, and profile
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
