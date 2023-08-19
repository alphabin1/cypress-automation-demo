const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.saucedemo.com/",
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  responseTimeout: 40000,
  video: true, 
  videoCompression: true,
  videoUploadOnPasses: true,
  chromeWebSecurity: false,

  e2e: {
    specPattern: 'cypress/e2e/*.cy.js',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Specify the directory where the reports will be generated
    overwrite: false, // Set to true if you want to overwrite existing reports
    html: true, // Set to true if you want to generate an HTML report
    json: true // Set to true if you want to generate a JSON report
  }
});
