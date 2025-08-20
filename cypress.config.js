const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) { },
  },
});
