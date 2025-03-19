import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
// import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
// import tailwind from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      camelcase: 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unused-prop-types': 'off',
      'react/require-default-props': 'off',
      'react/no-unescaped-entities': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
    },
  },
  // ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier').map((config) => ({
  //   ...config,
  //   files: ['**/*.+(ts|tsx)'],
  // })),
  // {
  //   files: ['**/*.+(ts|tsx)'],
  //   plugins: {
  //     '@typescript-eslint': typescriptEslintEslintPlugin,
  //   },
  //   languageOptions: {
  //     parser: tsParser,
  //   },
  //   rules: {
  //     '@typescript-eslint/explicit-function-return-type': 'off',
  //     '@typescript-eslint/explicit-module-boundary-types': 'off',
  //     'no-use-before-define': [0],
  //     '@typescript-eslint/no-use-before-define': [1],
  //     '@typescript-eslint/no-explicit-any': 'off',
  //     '@typescript-eslint/no-var-requires': 'off',
  //   },
  // },
  // ...tailwind.configs['flat/recommended'],
  // {
  //   settings: {
  //     tailwindcss: {
  //       callees: ['mySwyper'],
  //       removeDuplicates: true,
  //       whitelist: ['mySwyper'],
  //     },
  //   },
  // },
];

export default eslintConfig;
