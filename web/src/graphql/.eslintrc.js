module.exports = {
  extends: ['plugin:prettier/recommended'],
  parser: '@graphql-eslint/eslint-plugin',
  plugins: ['@graphql-eslint', 'prettier'],
  rules: {
    '@graphql-eslint/no-deprecated': 'error',
    '@graphql-eslint/fields-on-correct-type': 'warn',
    'prettier/prettier': [2, { parser: 'graphql' }]
  },
  parserOptions: {
    operations: './src/**/*.graphql',
    schema: __dirname + '/../../graphql.schema.json'
  },
  root: true
}
