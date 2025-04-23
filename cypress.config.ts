import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      configFile: "reporter-config.json"
  },
  videoCompression: 15,
  e2e: {
    baseUrl: "https://staging-rating.scoopandgo.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
