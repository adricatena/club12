import { CookieOptions, createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  // Create authenticated Supabase Client.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
      },
    },
  );
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoginRoute = nextUrl.pathname === "/login";
  const redirectUrl = request.nextUrl.clone();
  if (session && isLoginRoute) {
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  } else if (!session && !isLoginRoute) {
    redirectUrl.pathname = "/login";
    return NextResponse.redirect(redirectUrl);
  } else {
    return response;
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
