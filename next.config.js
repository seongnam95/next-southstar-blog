const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'js', 'jsx', 'ts', 'tsx'],
};

module.exports = withContentlayer(nextConfig);
