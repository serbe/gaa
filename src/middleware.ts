import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
  const handleI18nRouting = createMiddleware(routing);
  const token = request.cookies.get('token')?.value;

  if (
    process.env.USE_LOGIN === 'yes' &&
    locale != null &&
    !token &&
    segments.join('/') !== 'login' &&
    segments.join('/') !== 'register'
  ) {
    request.nextUrl.pathname = `/login`;
  }

  const response = handleI18nRouting(request);
  return response;
}

// export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*'],
};
