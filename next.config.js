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
      org: 'ventsislavnikolov',
      project: 'next-boilerplate',
    },
    {
      // Hides source maps from generated client bundles
      hideSourceMaps: true,
    },
  ),
);
