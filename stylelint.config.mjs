/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "custom-property-pattern": "" /* TODO: remove rule & refactor CSS */,
    "container-name-pattern": "" /* TODO: remove rule & refactor CSS */,
    "keyframes-name-pattern": "" /* TODO: remove rule & refactor CSS */,
  },
  overrides: [
    {
      files: ["**/*.module.css"],
      rules: {
        "value-keyword-case": [
          "lower",
          {
            ignoreProperties: ["composes"],
          },
        ],
        "selector-class-pattern": "",
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: [
              "export",
              "import",
              "global",
              "local",
              "external",
            ],
          },
        ],
        "selector-type-no-unknown": [
          true,
          {
            ignore: ["custom-elements"],
            ignoreTypes: ["from"],
          },
        ],
        "property-no-unknown": [
          true,
          {
            ignoreProperties: ["composes", "compose-with"],
            ignoreSelectors: [":export", /^:import/],
          },
        ],
        "at-rule-no-unknown": [
          true,
          {
            ignoreAtRules: ["value"],
          },
        ],
        "at-rule-empty-line-before": [
          "always",
          {
            except: ["blockless-after-same-name-blockless", "first-nested"],
            ignore: ["after-comment"],
            ignoreAtRules: ["value"],
          },
        ],
      },
    },
  ],
};
