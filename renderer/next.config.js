module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(tsx|ts|js|mjs|jsx)$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
