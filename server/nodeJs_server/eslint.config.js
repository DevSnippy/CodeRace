// eslint.config.js
module.exports = [
  {
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },

    extends: "eslint:recommended",

    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
    },

    ignores: ["node_modules/", "dist/", "arrays.mjs"],
  },
];
