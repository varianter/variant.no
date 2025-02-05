import withNextBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = withNextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "chewiesald2ijhpvmb34c.blob.core.windows.net",
      },
    ],
  },
  experimental: {
    taint: true,
  },
  async redirects() {
    return [
      {
        source: "/tjanster",
        destination: "/se/tjanster",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/se/jobs",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/om-variant",
        destination: "/",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/varianter",
        destination: "/se/varianter",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/varianter/goteborg",
        destination: "/se/varianter?location=g%C3%B6teborg",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/varianter/linkoping",
        destination: "/se/varianter?location=link%C3%B6ping",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/varianter/stockholm",
        destination: "/se/varianter?location=stockholm",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/tjanster/digital",
        destination: "/se/tjanster",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/tjanster/strategi",
        destination: "/se/tjanster",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
      {
        source: "/tjanster/kultur",
        destination: "/se/tjanster",
        has: [
          {
            type: "host",
            value: "variant.se",
          },
        ],
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(withBundleAnalyzer(nextConfig));
