'use strict';

module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    performance: true
  },
  rules: {
    // possible errors
    'comma-dangle': [2, 'never'],
    'no-console': 0,
    'no-extra-parens': 0,
    'no-unexpected-multiline': 2,
    'no-irregular-whitespace': 2,

    // best practices
    'accessor-pairs': 2,
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 0,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, { boolean: true, number: true, string: true }],
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 0,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [0, { props: false }],
    'no-proto': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-useless-call': 2,
    'no-useless-concat': 0,
    'no-void': 0,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 0,

    // strict
    'strict': [2, 'global'],

    // vars
    'init-declarations': [2, 'always'],
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 0,
    'no-use-before-define': [2, 'nofunc'],

    // style
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, "1tbs", { allowSingleLine: true }],
    'camelcase': [2, { properties: "always" }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [0, 'self'],
    'eol-last': 2,
    'func-style': [2, 'declaration'],
    'indent': [2, 2],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'linebreak-style': [2, 'unix'],
    'new-cap': [2, { "capIsNew": false }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, { uninitialized: 'always', initialized: 'never' }],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' }}],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent'],
    'quotes': [2, "single", "avoid-escape"],
    'semi-spacing': [2, { before: false, after: true }],
    'semi': [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [2, 'always'],

    // es6
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, { before: false, after: true }],
    'no-confusing-arrow': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 0,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-spread': 2,
    'require-yield': 2
  }
};
