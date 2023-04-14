/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@acme/ui", "lodash-es"],
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en", "ko"],
  },
  images: {
    domains: ["i.postimg.cc"],
  },
  env: {
    APP_SERV: "service_mvy485h",
    APP_TEMP: "template_3unplb2",
    APP_KEY: "ikAgJ0NQP9m1rJohf",
  },
};

module.exports = nextConfig;
