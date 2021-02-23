/* eslint-disable no-undef */
module.exports = {
  images: {
    domains: [
      'pbs.twimg.com' // Twitter Profile Picture
    ]
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      //TODO: generate feed, sitemap scripts.
      // require('./scripts/feed');
    }
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};
