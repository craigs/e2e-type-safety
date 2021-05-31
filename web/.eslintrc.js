module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'prettier',
    'unicorn',
    'react-hooks',
    'react',
    'css-modules'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:css-modules/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    schema: __dirname + '/graphql.schema.json',
    tsconfigRootDir: __dirname
  },
  root: true,
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'arrow-parens': [2, 'as-needed'],
    'no-implicit-dependencies': 0,
    curly: [2, 'multi-line'],
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true
      }
    ],
    'import/prefer-default-export': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [['~graphql', './src/generated/graphql.ts']],
        extensions: ['.ts']
      }
    }
  },
  ignorePatterns: [
    'next.config.js',
    'node_modules',
    'src/generated/graphql.ts',
    '**/*.d.ts'
  ]
}
