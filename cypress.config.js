const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account",
  },
  env: {
    mobileViewportWidthBreakpoint: 414,
    mobile: "iphone-xr",
    desktop: "macbook-15",
  },
});
