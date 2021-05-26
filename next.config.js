const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

module.exports = withPlugins([withImages], {
  target: 'serverless',
  webpack: (config) => {
    // Allows for non-pure CSS Modules in Nextjs.
    // Overrides css loader config setting modules mode to local

    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object',
    );
    if (oneOf) {
      const moduleCssRule = oneOf.oneOf.find(
        (rule) => regexEqual(rule.test, /\.module\.css$/),
        // regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );
      if (moduleCssRule) {
        const cssLoader = moduleCssRule.use.find(({ loader }) =>
          loader.includes('css-loader'),
        );
        if (cssLoader) {
          cssLoader.options.modules.mode = 'local';
        }
      }
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/sommerjobb',
        destination: 'https://jobs.variant.no/o/sommerjobb-2021',
        permanent: true,
      },
      {
        source: '/jobs/seniorutvikler-i-oslo',
        destination: '/jobs/erfaren-utvikler-i-oslo',
        permanent: true,
      },
    ];
  },
});
