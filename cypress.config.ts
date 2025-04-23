import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://staging-rating.scoopandgo.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
