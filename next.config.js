import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import NextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const sentryConfig = {
  silent: true,
  org: 'ventsislavnikolov',
  project: 'next-boilerplate',
};

const withSentry = withSentryConfig(nextConfig, sentryConfig, {
  hideSourceMaps: true,
});

const withNextIntl = NextIntlPlugin('./src/i18n.ts');
export default withBundleAnalyzerConfig(withNextIntl(withSentry));
