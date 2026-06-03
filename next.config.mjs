import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 960, 1080],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return [
      // Tracking redirects - use these URLs to track traffic sources
      {
        source: "/from/resume",
        destination: "/",
        permanent: false,
      },
      {
        source: "/from/linkedin",
        destination: "/",
        permanent: false,
      },
      {
        source: "/from/github",
        destination: "/",
        permanent: false,
      },
      {
        source: "/from/email",
        destination: "/",
        permanent: false,
      },
      {
        source: "/from/twitter",
        destination: "/",
        permanent: false,
      },
      {
        source: "/from/:source",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
