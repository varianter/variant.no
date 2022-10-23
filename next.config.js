const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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

module.exports = withBundleAnalyzer(
  withImages({
    images: {
      disableStaticImages: true,
      domains: [
        'variantno.blob.core.windows.net',
        'podcast.variant.no', // Need this to get the images for the RSS feed
        'images.transistor.fm', // this
        'img.youtube.com', // this
        'cdn-images-1.medium.com', // aaaaand this
      ],
      formats: ['image/avif', 'image/webp'],
    },

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
        test: /\.(woff(2)?|ttf|eot)/,
        type: 'asset/resource',
        generator: {
          publicPath:
            process.env.NODE_ENV === 'development' ? '../_next/' : '../../',
          filename: 'static/fonts/[name].[contenthash][ext]',
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
  }),
);
