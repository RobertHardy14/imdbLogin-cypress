const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jyxtaf',
  e2e: {
    testIsolation: false,
    env: {
      username: 'rob.moreno@hotmail.com',
      password: 'NgTheRefact'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
