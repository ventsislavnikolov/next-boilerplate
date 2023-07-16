const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: ['res.cloudinary.com'],
  },
  rewrites() {
    return [{ source: '/ping', destination: '/api/ping' }];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withSentryConfig(
    nextConfig,
    {
      silent: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    },
    {
      // Hides source maps from generated client bundles
      hideSourceMaps: true,
    },
  ),
);
