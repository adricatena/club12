import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoginRoute = nextUrl.pathname === "/login";
  const redirectUrl = req.nextUrl.clone();
  if (session && isLoginRoute) {
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  } else if (!session && !isLoginRoute) {
    redirectUrl.pathname = "/login";
    return NextResponse.redirect(redirectUrl);
  } else {
    return res;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
