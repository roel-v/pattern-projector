const withPWA = require('next-pwa')({
  dest: 'public'
})
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    /* Next.js static site generation isn't compatible without this */
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  }
}

module.exports = withPWA(withNextIntl(nextConfig))
