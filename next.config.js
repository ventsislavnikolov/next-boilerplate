import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

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
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/@swc/**/*', 'node_modules/@esbuild/**/*', 'node_modules/terser/**/*'],
    },
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `/api/:path*`,
      },
    ];
  },
};

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const sentryConfig = {
  silent: true,
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
};

const withSentry = withSentryConfig(nextConfig, sentryConfig, {
  hideSourceMaps: true,
});

export default withBundleAnalyzerConfig(withSentry);
