module.exports = {
  testEnvironment: "jsdom", // Ensures Jest mimics a browser environment
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Ensures JSX and JS are transpiled correctly
  },
};
