import createNextIntlPlugin from 'next-intl/plugin';
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

const withNextIntl = createNextIntlPlugin('./src/request.ts');
export default withBundleAnalyzerConfig(withNextIntl(withSentry));
