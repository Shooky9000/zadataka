// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

const addContext = require("mochawesome/addContext.js");

Cypress.on("test:after:run", function(test, runnable) {
    
    var videoName = Cypress.spec.name;
    videoName = videoName.replace('/.cy.ts.*', '.ts');
    var videoUrl = 'videos/' + videoName + '.mp4';

    addContext({ test: test }, videoUrl);
});
