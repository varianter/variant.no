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
  ],
  ignorePatterns: ["dist", "node_modules", ".sanity"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // TODO
    "unused-imports/no-unused-imports": "error",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true },
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
