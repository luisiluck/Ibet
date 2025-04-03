import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    defaultCommandTimeout: 15000,
    video: true,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      const user =  process.env.CYPRESS_USER;
      const password = process.env.CYPRESS_PASSWORD;
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
