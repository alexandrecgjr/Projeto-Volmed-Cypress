const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
         //supportFile: true, // Isso remove a obrigatoriedade do arquivo     
         setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: true,
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: true,
        timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "7bmf8a", //Insira a projectId pela fornecida no seu Cypress Cloud
    defaultCommandTimeout: 60000,
    env:{
      "email": "clinica@teste.com",
      "senha": "4321",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista",
      "requestMode": true
    }
  },
});