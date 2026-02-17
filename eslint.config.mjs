import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
    ignores: ['node_modules', 'dist', 'build'],
  },
]);
