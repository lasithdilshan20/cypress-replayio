const { defineConfig } = require("cypress");
import cypressReplay from "@replayio/cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adds "Replay Firefox" (macOS, linux) and "Replay Chromium" (linux)
      // browsers and hooks into Cypress lifecycle methods to capture test
      // metadata and results
      cypressReplay(on, config);
      return config;
    },
  },
});