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
};

export default withNextIntl(withBundleAnalyzer(nextConfig));
