module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
