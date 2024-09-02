// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    // Add any additional Next.js config here
    experimental: {
      appDir: true,
    },
  });