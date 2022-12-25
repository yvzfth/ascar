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
  env: {
    NEXT_SERVER_API_KEY: process.env.NEXT_SERVER_API_KEY,
    NEXT_SERVER_AUTH_DOMAIN: process.env.NEXT_SERVER_AUTH_DOMAIN,
    NEXT_SERVER_PROJECT_ID: process.env.NEXT_SERVER_PROJECT_ID,
    NEXT_SERVER_STORAGE_BUCKET: process.env.NEXT_SERVER_STORAGE_BUCKET,
    NEXT_SERVER_MESSAGING_SENDER_ID:
      process.env.NEXT_SERVER_MESSAGING_SENDER_ID,
    NEXT_SERVER_APP_ID: process.env.NEXT_SERVER_APP_ID,
    NEXT_SERVER_SERVICE_TYPE: process.env.NEXT_SERVER_SERVICE_TYPE,
    NEXT_SERVER_DATABASE_URL: process.env.NEXT_SERVER_DATABASE_URL,
    NEXT_SERVER_PRIVATE_KEY: process.env.NEXT_SERVER_PRIVATE_KEY,
    NEXT_SERVER_PRIVATE_KEY_ID: process.env.NEXT_SERVER_PRIVATE_KEY_ID,
    NEXT_SERVER_CLIENT_EMAIL: process.env.NEXT_SERVER_CLIENT_EMAIL,
    NEXT_SERVER_CLIENT_ID: process.env.NEXT_SERVER_CLIENT_ID,
    NEXT_SERVER_AUTH_URI: process.env.NEXT_SERVER_AUTH_URI,
    NEXT_SERVER_TOKEN_URI: process.env.NEXT_SERVER_TOKEN_URI,
  },
};

module.exports = nextConfig;
