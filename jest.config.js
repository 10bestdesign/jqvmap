module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/test/setupTests.js'],
  testMatch: ['**/tests/**/?(*.)+(spec|test).js', '**/__tests__/**/*.js'],
  testTimeout: 10000
};
