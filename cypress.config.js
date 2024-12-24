const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://216.10.245.166",
    failOnStatusCode: false,
    chromeWebSecurity: false,
    pageLoadTimeout: 25000,
    defaultCommandTimeout: 25000,
    viewportWidth: 1360,
    viewportHeight: 768,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports",
        screenshotOnRunFailure: true,
        reportFilename: "report",
        overwrite: false,
        html: true,
        json: true,
        charts: true,
      },
    },

    screenshotsFolder: "cypress/screenshots",
  },
  video: false,
});
