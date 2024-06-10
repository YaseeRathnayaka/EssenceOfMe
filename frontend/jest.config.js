export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/components/Tests/fileMock.js',
    },
  };
  