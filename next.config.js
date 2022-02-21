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
  images: {
    disableStaticImages: true,
    domains: ['variantno.blob.core.windows.net'],
  },
  optimizeFonts: false,

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

    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      loader: 'file-loader',
      options: {
        esModule: false,
        name: '[name].[ext]',
        outputPath: 'static/media/fonts/',
        publicPath: '../assets/fonts/',
      },
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/jobs/(senior|erfaren-)utvikler-i-oslo',
        destination: '/jobs/utvikler-i-oslo',
        permanent: true,
      },
      {
        source: '/jobs/(senior|erfaren-)designer-i-oslo',
        destination: '/jobs/designer-i-oslo',
        permanent: true,
      },
      {
        source: '/jobs/(ceo|cdo|cto)-i-variant-oslo',
        destination: '/jobs',
        permanent: true,
      },
    ];
  },
});
