const { defineConfig } = require("cypress");


module.exports = defineConfig({
  screenshotsFolder: "cypress/reports/mochareports/assets",
  projectId: 'vd6ozi',
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
       // implement node event listeners here
       return require('./cypress/plugins/index.js')(on,config)
    },
    testIsolation: false,
    video:true,
    baseUrl: 'https://react-redux.realworld.io'
  },
});
