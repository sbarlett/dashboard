const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  maxWorkers: "50%",
  testTimeout: 10000,
  maxConcurrency: 3,
  coverageProvider: "v8",
};

module.exports = createJestConfig(customJestConfig);
