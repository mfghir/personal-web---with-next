/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@acme/ui", "lodash-es"],
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en", "ko"],
  },

 
};

module.exports = nextConfig;
