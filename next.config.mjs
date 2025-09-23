import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  experimental: {
    // trace: false // 禁用trace功能
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
      },
    ],
  },
  
  serverExternalPackages: [
    'ts-morph',
    'typescript',
    'oxc-transform',
    'twoslash',
    'shiki',
  ],
  // async rewrites() {
  //   return [
  //     {
  //       source: '/docs/:path*.mdx',
  //       destination: '/llms.mdx/:path*',
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/docs/ui/blocks/layout',
  //       destination: '/docs/ui/layouts/docs',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/ui/blocks/:path*',
  //       destination: '/docs/ui/layouts/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default withMDX(config);
