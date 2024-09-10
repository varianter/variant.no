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

const ContentSecurityPolicy = `
  default-src 'self';
  connect-src 'self' https://variant.innocraft.cloud/ https://g.nav.no/api/v1/;
  script-src 'self' 'sha256-j6xN8x073Dhm+Ee4HKwIIRXsHIqI5aIRHC0pgnhVcJY=' https://variant.innocraft.cloud/ ${
    process.env.NODE_ENV !== 'production' ? "'unsafe-eval'" : ''
  };
  style-src 'self' 'unsafe-inline' http://hello.myfonts.net/;
  img-src 'self' data: https://medium.com/ https://cdn-images-1.medium.com/ https://images.transistor.fm/ https://i.ytimg.com/ https://utfs.io/;
  media-src 'self' https://media.transistor.fm/;
  frame-src 'self' https://www.youtube-nocookie.com/;
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  object-src 'none';
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Permissions-Policy',
    value:
      'accelerometer=(), autoplay=(), camera=(), display-capture=(), fullscreen=(), geolocation=(), gyroscope=(), microphone=(), payment=(), storage-access=(), web-share=(), xr-spatial-tracking=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = withBundleAnalyzer(
  withImages({
    images: {
      disableStaticImages: true,
      remotePatterns: [
        { protocol: 'https', hostname: 'variantno.blob.core.windows.net' },
        {
          protocol: 'https',
          hostname: 'chewiesald2ijhpvmb34c.blob.core.windows.net',
        },
        { protocol: 'https', hostname: 'podcast.variant.no' }, // Need this to get the images for the RSS feed
        { protocol: 'https', hostname: 'images.transistor.fm' }, // this
        { protocol: 'https', hostname: 'img.youtube.com' }, // this
        { protocol: 'https', hostname: 'cdn-images-1.medium.com' }, // aaaaand this
      ],
      formats: ['image/avif', 'image/webp'],
    },

    experimental: {
      workerThreads: false,
      cpus: 1,
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
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
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
        {
          source: '/nyttarskalas',
          destination: '/nyttarskalas-trondheim',
          permanent: true,
        },
        {
          source: '/nyttarsfest',
          destination: '/nyttarsfest-oslo',
          permanent: true,
        },
      ];
    },
  }),
);
