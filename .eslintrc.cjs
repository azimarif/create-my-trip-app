module.exports = {
  root: true,
  env: {browser: true, es2021: true, jest: true},
  extends: ["react-app", "react-app/jest", "eslint:recommended", "plugin:react-hooks/recommended", "prettier"],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "coverage",
    "node_modules",
    "src/**/*.d.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
  },
};
