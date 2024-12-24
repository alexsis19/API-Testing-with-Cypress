// // cypress/support/e2e.js

// function loginViaAAD(username, password) {
//   cy.visit('https://dynamics.microsoft.com/en-us/business-central/signin/?ru=https%3A%2F%2Fbusinesscentral.dynamics.com%2F%3FnoSignUpCheck%3D1');
//   // cy.get('button#signIn').click();
//   // cy.xpath('div{text()="Sign in"}').click();
//   // cy.xpath('//a[@id="hero-basic_access-your-dynamics-365-business-central-account_CTA-1" and @data-bi-name="Sign in"]').click()
//   cy.xpath('//a[@id="hero-basic_access-your-dynamics-365-business-central-account_CTA-1"]').invoke('attr', 'target', '_self') // Remove target="_blank"
//   .click(); // Click the element




//   // Login to your AAD tenant.
//   cy.origin('login.microsoftonline.com', {
//     args: {
//       username,
//     },
//   }, ({ username }) => {
//     cy.get('input[type="email"]').type(username, {
//       log: false,
//     });
//     cy.get('input[type="submit"]').click();
//   });

//   // Depending on the user and how they are registered with Microsoft, the origin may go to live.com
//   cy.origin('login.live.com', {
//     args: {
//       password,
//     },
//   }, ({ password }) => {
//     cy.get('input[type="password"]').type(password, {
//       log: false,
//     });
//     cy.get('input[type="submit"]').click();
//     cy.get('#idBtn_Back').click();
//   });

//   // Ensure Microsoft has redirected us back to the sample app with our logged in user.
//   // cy.url().should('equal', 'https://dynamics.microsoft.com/en-us/business-central/signin/?ru=https%3A%2F%2Fbusinesscentral.dynamics.com%2F%3FnoSignUpCheck%3D1');
//   cy.get('#welcome-div').should('contain', `Welcome ${Cypress.env('aad_username')}!`);
// }

// Cypress.Commands.add('loginToAAD', (username, password) => {
//   const log = Cypress.log({
//     displayName: 'Azure Active Directory Login',
//     message: [`🔐 Authenticating | ${username}`],
//     autoEnd: false,
//   });
//   log.snapshot('before');

//   loginViaAAD(username, password);

//   log.snapshot('after');
//   log.end();
// });
/// <reference types="cypress-xpath" />