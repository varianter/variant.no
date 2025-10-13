const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const { defineConfig, globalIgnores } = require("eslint/config");
const boundaries = require("eslint-plugin-boundaries");
const _import = require("eslint-plugin-import");
const jsxA11Y = require("eslint-plugin-jsx-a11y");
const noRelativeImportPaths = require("eslint-plugin-no-relative-import-paths");
const prettier = require("eslint-plugin-prettier");
const unusedImports = require("eslint-plugin-unused-imports");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      parser: tsParser,

      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },

    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
        "next/core-web-vitals",
      ),
    ),

    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "unused-imports": unusedImports,
      "no-relative-import-paths": noRelativeImportPaths,
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier),
      boundaries,
      "jsx-a11y": fixupPluginRules(jsxA11Y),
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },

      "boundaries/elements": [
        {
          mode: "full",
          type: "schema",
          pattern: ["studioShared/schemas/**/*", "studio/schemas/**/*"],
        },
        {
          mode: "full",
          type: "app",

          pattern: [
            "src/app/**/*",
            "src/components/**/*",
            "src/i18n/**/*",
            "src/middlewares/**/*",
            "src/types/**/*",
            "src/utils/**/*",
          ],
        },
        {
          mode: "full",
          type: "studioComponents",
          pattern: ["studio/components/**/*", "studioShared/components/**/*"],
        },
        {
          mode: "full",
          type: "studioLib",
          pattern: ["studio/lib/**/*", "studioShared/lib/**/*"],
        },
      ],
    },

    rules: {
      "unused-imports/no-unused-imports": "error",
      "import/no-named-as-default": "off",
      "import/no-unresolved": "error",

      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowSameFolder: true,
        },
      ],

      "boundaries/element-types": [
        "error",
        {
          default: "disallow",

          rules: [
            {
              from: ["schema"],
              allow: ["schema", "studioComponents", "studioLib"],
            },
            {
              from: ["studioComponents"],
              allow: ["app", "studioComponents", "studioLib"],
            },
            {
              from: ["studioLib"],
              allow: ["studioLib"],
              disallow: ["schema", "studioComponents", "app"],
            },
            {
              from: ["app"],
              allow: ["app", "studioLib"],
              disallow: ["schema", "studioComponents"],
            },
          ],
        },
      ],

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],

          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
  globalIgnores([
    "**/dist",
    "**/node_modules",
    "**/.sanity",
    "**/.next",
    "./next",
    "eslint.config.cjs",
    "next-env.d.ts",
  ]),
]);
