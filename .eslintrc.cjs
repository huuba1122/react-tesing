module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@app", "./src/app"],
          ["@assets/*", "./src/assets"],
          ["@components", "./src/components"],
          ["@features", "./src/features"],
          ["@shared", "./src/shared"],
          ["@routes", "./src/routes"],
        ],
        extensions: [".js", ".json", ".jsx"],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
