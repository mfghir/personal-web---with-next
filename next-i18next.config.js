const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en", "ko"],
  },
  localePath: path.resolve("./public/locales"),
};
