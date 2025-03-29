import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

import momentRule from "./eslint-rules/moment.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["coverage/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "custom/forbid-moment": "error",
    },
    plugins: {
      custom: {
        rules: {
          "forbid-moment": momentRule,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];