/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss", // base SCSS rules
    "stylelint-prettier/recommended", // run Prettier as a rule
  ],
  plugins: [
    "stylelint-scss", // SCSS-specific linting
    "stylelint-order", // property/order grouping
    "stylelint-prettier", // Prettier integration
  ],
  rules: {
    // disallow duplicate properties in a declaration block
    "declaration-block-no-duplicate-properties": true,
    // disable descending-specificity checks project-wide
    "no-descending-specificity": null,
    // disallow unknown at-rules
    "selector-pseudo-class-no-unknown": [
      true,
      {ignorePseudoClasses: ["global"]},
    ],
    // enforce camelCase keyframe names
    "keyframes-name-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        message:
          "Expected keyframe name to be camelCase (e.g. runningProgress)",
      },
    ],
    // enforce a sensible block order:
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules",
      "rules",
    ],
    // alphabetize within each group:
    "order/properties-alphabetical-order": true,
  },
  ignoreFiles: ["**/node_modules/**", "dist/**", "middleware/**"],
};
