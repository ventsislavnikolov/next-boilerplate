import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/tests/**/*.(test).{ts,tsx,js,jsx}'],
  moduleNameMapper: {
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation'),
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
};

export default createJestConfig(config);
