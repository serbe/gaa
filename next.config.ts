import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // distDir: 'build',
  // output: 'standalone',
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'ru'],
  //   defaultLocale: 'ru',
  // },
  // trailingSlash: true,
  // experimental: {
  //   typedRoutes: true,
  // },
};

export default withNextIntl(nextConfig);
