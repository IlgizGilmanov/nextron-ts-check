/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    // Fixes npm packages that depend on `fs`, `net`, `tls` modules
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(tsx|ts|js|mjs|jsx)$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    ASSET_HOST: process.env.ASSET_HOST || '',
    API_URL: process.env.API_URL,
    PRINT_HTTP_REQUEST_LOGS: process.env.PRINT_HTTP_REQUEST_LOGS,
  },
};
