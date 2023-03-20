/** @type {import('next').NextConfig} */

const nodeExternals = require('webpack-node-externals');

module.exports = {
  externals: [nodeExternals()],
};
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
};
