module.exports = {
  title: "Craft CMS Documentation",
  setTitle: "Craft CMS",
  icon: "/icons/craft.svg",
  baseDir: "",
  versions: [
    ["3.x", { label: "3.x" }],
    ["2.x", { label: "2.x" }]
  ],
  defaultVersion: "3.x",
  primarySet: true,
  locales: {
    "/": {
      lang: "en-US",
      name: "English",
      title: "Craft CMS Documentation",
      config: require("./craft-cms-en.js")
    },
    "/ja/": {
      lang: "ja",
      title: "Craft CMS ドキュメント",
      config: require("./craft-cms-ja.js")
    }
  }
};
