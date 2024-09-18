import NextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: '/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
};

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const sentryConfig = {
  org: 'ventsislavnikolov',
  project: 'next-boilerplate',
  silent: true,
};

const withSentry = withSentryConfig(nextConfig, sentryConfig, {
  hideSourceMaps: true,
});

const withNextIntl = NextIntlPlugin('./src/i18n.ts');
export default withBundleAnalyzerConfig(withNextIntl(withSentry));
