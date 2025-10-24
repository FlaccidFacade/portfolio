import { createRequire } from 'module';
const require = createRequire(import.meta.url);

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
  webpack: (config, options) => {
    // Make Codecov plugin optional and load only when available and token is set.
    if (process.env.CODECOV_TOKEN) {
      try {
        // Prefer the Next.js-specific helper if available
        const maybeNextPlugin = require("@codecov/nextjs-webpack-plugin");
        if (maybeNextPlugin && maybeNextPlugin.codecovNextJSWebpackPlugin) {
          config.plugins.push(
            maybeNextPlugin.codecovNextJSWebpackPlugin({
              enableBundleAnalysis: true,
              bundleName: "example-nextjs-webpack-bundle",
              uploadToken: process.env.CODECOV_TOKEN,
              webpack: options.webpack,
            }),
          );
        } else {
          // Fallback to the generic webpack plugin if the Next plugin isn't present
          const { CodecovWebpackPlugin } = require("@codecov/webpack-plugin");
          config.plugins.push(
            new CodecovWebpackPlugin({
              enableBundleAnalysis: true,
              bundleName: "example-nextjs-webpack-bundle",
              uploadToken: process.env.CODECOV_TOKEN,
            }),
          );
        }
      } catch (e) {
        try {
          const { CodecovWebpackPlugin } = require("@codecov/webpack-plugin");
          config.plugins.push(
            new CodecovWebpackPlugin({
              enableBundleAnalysis: true,
              bundleName: "example-nextjs-webpack-bundle",
              uploadToken: process.env.CODECOV_TOKEN,
            }),
          );
        } catch (err) {
          // Plugin is optional; continue without coverage reporting if not available.
          // Optionally log the error for debugging:
          // console.warn("CodecovWebpackPlugin could not be loaded:", err);
        }
      }
    }
    return config;
  },
};
export default nextConfig;
