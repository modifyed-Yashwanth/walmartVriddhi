import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["en", "hi"]);

export function middleware(req: NextRequest) {
  // Skip static files and API routes
  const PUBLIC_FILE = /\.(.*)$/;
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the path already includes a locale
  const locales = ["en", "hi"];
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Try to get locale from cookie
    let locale: string | undefined =
      req.cookies.get("NEXT_LOCALE")?.value || undefined;
    // Or from Accept-Language header
    if (!locale) {
      locale =
        acceptLanguage.get(req.headers.get("Accept-Language") || undefined) ||
        undefined;
    }
    // Fallback to default
    if (!locale || !locales.includes(locale)) {
      locale = "en";
    }
    // Redirect to locale-prefixed path
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except for static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
