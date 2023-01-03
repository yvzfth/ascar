/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // env: {
  //   NEXT_SERVER_API_KEY: process.env.NEXT_SERVER_API_KEY,
  //   NEXT_SERVER_AUTH_DOMAIN: process.env.NEXT_SERVER_AUTH_DOMAIN,
  //   NEXT_SERVER_PROJECT_ID: process.env.NEXT_SERVER_PROJECT_ID,
  //   NEXT_SERVER_STORAGE_BUCKET: process.env.NEXT_SERVER_STORAGE_BUCKET,
  //   NEXT_SERVER_MESSAGING_SENDER_ID:
  //     process.env.NEXT_SERVER_MESSAGING_SENDER_ID,
  //   NEXT_SERVER_APP_ID: process.env.NEXT_SERVER_APP_ID,
  //   NEXT_SERVER_GOOGLE_CLIENT_ID: process.env.NEXT_SERVER_GOOGLE_CLIENT_ID,
  //   NEXT_SERVER_GOOGLE_CLIENT_SECRET:
  //     process.env.NEXT_SERVER_GOOGLE_CLIENT_SECRET,
  //   NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  // },
};

module.exports = nextConfig;
