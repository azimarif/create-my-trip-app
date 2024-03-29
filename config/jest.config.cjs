module.exports = {
  "rootDir": "../",
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    '\^.+\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': 'jest-transform-stub'
  },
  "setupFilesAfterEnv": [
    "<rootDir>/config/setupTests.js"
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/html-report",
        filename: "report.html",
      },
    ],
  ],
  collectCoverageFrom: [
    '!*.d.ts',
    "src/**/*.{js,ts,jsx,tsx}",
    "!src/main.tsx",
  ],
  coverageReporters: ["text"],
};
