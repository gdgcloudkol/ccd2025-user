import NextFederationPlugin from "@module-federation/nextjs-mf";

const federationConfig = {
  name: 'ccd2025-user',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './user': './src/pages/bootstrap.tsx',
  },
  shared: ['react', 'react-dom'],
  extraOptions: {
    exposePages: true,
  },
};

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config: { plugins: NextFederationPlugin[]; }) {
    config.plugins.push(
      new NextFederationPlugin(federationConfig)
    );
    return config;
  },
};

module.exports = nextConfig;