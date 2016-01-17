module.exports = {
  env: {
    node: true,
    es6: true
  },
  globals: {
    performance: true
  },
  rules: {
    'indent': [2, 2],
    'quotes': [2, "single", "avoid-escape"],
    'brace-style': [2, "1tbs", { "allowSingleLine": true }],
    'camelcase': [2, { properties: "always" }],
    'comma-style': [2, "last"],
    'func-style': [2, "declaration"],
    'guard-for-in': 2,
    'no-nested-ternary': 2,
    'no-undefined': 2,
    'no-undef': 2,
    'no-labels': 2,
    'no-multi-spaces': 2,
    'radix': 2,
    'yoda': 0,
    'new-cap': [2, { "capIsNew": false }],
    'no-unused-vars': 0,
    'no-fallthrough': 0,
    'no-loop-func': 0,
    'accessor-pairs': 2,
    'no-use-before-define': [2, "nofunc"],
    'dot-notation': 2,
    'dot-location': [2, "property"],
    'eqeqeq': 2,
    'no-caller': 2,
    'no-underscore-dangle': 0,
    'no-eq-null': 2,
    'space-before-function-paren': [2, "never"],
    'space-after-keywords': [2, "always"],
    'space-before-blocks': [2, "always"],
    'spaced-comment': [2, "always", { exceptions: ["-"]}],
    'consistent-return': 2,
    'strict': [2, "global"],
    'wrap-iife': [2, "inside"]
  }
};
