import js from "@eslint/js";
import globals from "globals";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  // 1. IGNORE GLOBAL: Adicionado todas as pastas de build e resultados
  {
    ignores: [
      "**/cypress/results/**", 
      "**/node_modules/**", 
      "**/dist/**",
      "**/build/**",      // Ignora qualquer pasta de build (servidor)
      "**/server/**",     // Ignora a pasta do servidor (foco apenas Cypress)
      "**/server/build/**"
    ],
  },
  
  js.configs.recommended,

  // 2. Configuração para arquivos do Cypress
  {
    files: ["**/*.cy.{js,jsx,ts,tsx}", "**/cypress/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...cypressPlugin.configs.recommended.languageOptions.globals,
      },
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-pause": "error",
      "no-unused-vars": "warn" 
    },
  },

  // 3. Ajuste para arquivos de configuração (Cypress e Jest)
  {
    files: ["cypress.config.js", "**/jest.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "commonjs",
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off"
    }
  }
];
