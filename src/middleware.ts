import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  if (nextUrl.pathname === "/login") {
    if (data.session) {
      const homeUrl = nextUrl.clone();
      homeUrl.pathname = "/";
      return NextResponse.redirect(homeUrl);
    }
    return res;
  }

  // Check auth condition
  if (data.session) {
    // Authentication successful, forward request to protected route.
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = nextUrl.clone();
  redirectUrl.pathname = "/login";
  redirectUrl.searchParams.set(`redirectedFrom`, nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
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
    // "/((?!api|_next/static|_next/image|favicon.ico).*)", // aun no se si a la api hay que protegerla o no
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
