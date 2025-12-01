import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // files and ignore settings
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["dist", "node_modules", "middleware", "middleware/**/*"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {ecmaFeatures: {jsx: true}},
    },
  },
  // recommended configurations for JS and TypeScript
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  // Note: If importPlugin.flatConfigs is undefined, you may need to use 'eslint-plugin-import-x'
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettier,
  {
    ignores: ["middleware/**/*"],
    // plugin configurations
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefreshPlugin,
      "jsx-a11y": a11yPlugin,
      "prettier": prettierPlugin,
    },
    // rules
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
      ...a11yPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        {allowConstantExport: true},
      ],
      "react/prop-types": "off",
      "import/order": ["error", {alphabetize: {order: "asc"}}],
      "no-undef": "error",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "func-names": "warn",
      "object-shorthand": "off",
      "class-methods-use-this": "off",
      "consistent-return": "off",
      "import/no-dynamic-require": "off",
      "global-require": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/mouse-events-have-key-events": "off",
      "max-classes-per-file": "off",
      "no-nested-ternary": "off",
      "no-new": "off",
      "no-plusplus": "off",
      "no-process-exit": "off",
      "no-restricted-globals": "off",
      "node/exports-style": "off",
      "node/no-unpublished-import": "off",
      "node/no-unsupported-features/es-syntax": "off",
      "no-console": ["warn", {allow: ["warn", "debug", "error", "info"]}],
      "no-unused-expressions": [
        "error",
        {allowShortCircuit: true, allowTernary: true},
      ],
      "react/no-array-index-key": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "linebreak-style": ["error", "unix"],
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          trailingComma: "es5",
          printWidth: 80,
          useTabs: false,
          bracketSpacing: false,
          bracketSameLine: false,
          quoteProps: "consistent",
          jsxSingleQuote: false,
          objectWrap: "collapse",
          tabWidth: 2,
          proseWrap: "always",
          importOrder: ["^[./]"],
          importOrderSeparation: true,
          importOrderSortSpecifiers: true,
          endOfLine: "lf",
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]},
        typescript: {alwaysTryTypes: true, project: "./tsconfig.json"},
      },
      "import/ignore": ["node_modules", ".json$", ".(scss|css)$"],
      "react": {version: "detect"},
    },
  },
  {
    files: ["middleware/**/*.{js,ts}"],
    ignores: ["middleware/dist", "middleware/node_modules", "middleware/lib"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-var-requires": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
      "no-undef": "off",
    },
    settings: {react: {version: "detect"}},
  },
];
