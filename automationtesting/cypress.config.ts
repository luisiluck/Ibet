import { defineConfig } from "cypress";
import cypressOnFix from "cypress-on-fix";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: true,
  e2e: {
    specPattern: "**/*.feature",
    defaultCommandTimeout: 15000,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      const user = config.env.USER || process.env.CYPRESS_USER 
      const password = config.env.PASSWORD || process.env.CYPRESS_PASSWORD;
      if (user && password) {
        config.baseUrl = `https://${user}:${password}@qatesting-wand-stg.cpe.gigmagic.io/en/`
      } else{
        throw new Error('User or password are not set in environment variables');
      }
      return config;
    },
  },
  viewportWidth: 1024,
  viewportHeight: 768,
  includeShadowDom: true
});
