import react from 'eslint-plugin-react';
import { browser } from 'globals';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browser,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
  },
];