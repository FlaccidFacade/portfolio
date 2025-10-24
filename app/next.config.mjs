/** @type {import('next').NextConfig} */

const nextConfig = {
  // Silence Next 16 Turbopack+webpack-config warning; we still force webpack in CI builds. TODO: a reason to fully migrate to Turbopack?
  turbopack: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/aboutMe',
        permanent: true,
      },
    ];
  },
  webpack: async (config, options) => {
    // Make Codecov plugin optional and load only when available and token is set.
    if (process.env.CODECOV_TOKEN) {
      try {
        const mod = await import("@codecov/nextjs-webpack-plugin");
        if (mod && mod.codecovNextJSWebpackPlugin) {
          config.plugins.push(
            mod.codecovNextJSWebpackPlugin({
              enableBundleAnalysis: true,
              bundleName: "example-nextjs-webpack-bundle",
              uploadToken: process.env.CODECOV_TOKEN,
              webpack: options.webpack,
            }),
          );
        }
      } catch (e) {
        // Plugin not installed or unsupported; continue without it.
      }
    }
    return config;
  },
};
export default nextConfig;
