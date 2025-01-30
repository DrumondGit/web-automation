const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account",
    failOnStatusCode: false,
  },
  env: {
    mobileViewportWidthBreakpoint: 414,
    mobile: "iphone-xr",
    desktop: "macbook-15",
  },
});
