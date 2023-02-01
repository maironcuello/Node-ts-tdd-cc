export default {
  roots: ['<rootDir>/src'],
  collectCoverFrom: ['<rootDir>/src/***/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
