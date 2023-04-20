const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      return config;
    },
  },
});
