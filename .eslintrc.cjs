module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Allow console statements in development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // Allow unused variables that start with underscore
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Disable explicit return types for functions
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow any type in some cases
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}