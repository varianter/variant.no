module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-type-checked",  // TODO
    // "plugin:@typescript-eslint/stylistic-type-checked",  // TODO
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "no-relative-import-paths",
    "import",
    "prettier",
    "eslint-plugin-boundaries",
  ],
  ignorePatterns: ["dist", "node_modules", ".sanity"],
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
        pattern: ["studioShared/schema/**/*", "studio/schema/**/*"],
      },
      {
        mode: "full",
        type: "app",
        pattern: [
          "src/app/**/*",
          "src/components/**/*",
          "src/i18n/**/*",
          "src/stories/**/*",
          "src/middlewares/**/*",
          "src/types/**/*",
          "src/utils/**/*",
        ],
      },
      {
        mode: "full",
        type: "studioComponents",
        pattern: ["studio/components/**/*", "sharedStudio/components/**/*"],
      },
      {
        mode: "full",
        type: "studioLib",
        pattern: ["studio/lib/**/*", "sharedStudio/lib/**/*"],
      },
    ],
  },

  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true },
    ],

    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["schema"],
            allow: ["schema", "studioComponents"],
          },
          {
            from: ["studioComponents"],
            allow: ["app", "studioComponents", "studioLib"],
          },
          {
            from: ["studioLib"],
            allow: ["studioLib"],
            disallow: ["schema", "studioComponents"],
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
          "builtin", // from NodeJS native
          "external",
          "internal",
          ["sibling", "parent"], // sibling and parent types they can be mingled together
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
        ignoreDeclarationSort: true, // handled by eslint-plugin-import
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
  },
};
