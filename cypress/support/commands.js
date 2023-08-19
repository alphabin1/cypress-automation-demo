import 'cypress-xpath';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('clickBySelector', (selector) => {
    if (selector.startsWith('//')) {
      // If the selector starts with '//', treat it as an XPath selector
      cy.xpath(selector).click();
    } else {
      // Otherwise, treat it as a CSS selector
      cy.get(selector).click();
    }
  });

Cypress.Commands.add('waitUntilVisible', (selector) => {
    if (Cypress._.isString(selector) && selector.startsWith('//')) {
      // If the selector starts with '//', treat it as an XPath selector
      return cy.xpath(selector).should('be.visible');
    } else {
      // Otherwise, treat it as a CSS selector
      return cy.get(selector).should('be.visible');
    }
})

Cypress.Commands.add('elementShouldNotExist', (selector) => {
  if(Cypress._.isString(selector) && selector.startsWith('//')) {
    return cy.xpath(selector).should('not.be.visible')
  } else {
    return cy.get(selector).should('not.be.visible')
  }
})

Cypress.Commands.add('inputType', (selector, text)=> {
    if(Cypress._.isString(selector) && selector.startsWith('//')) {
        cy.xpath(selector).type(text)
    } else {
        cy.get(selector).type(text)
    }
})

Cypress.Commands.add('getText', (selector) => {
    if(Cypress._.isString(selector) && selector.startsWith('//')) {
      return cy.xpath(selector).invoke('text')
    } else {
      return cy.get(selector).invoke('text')
    }
})

Cypress.Commands.add('elementCheck', (selector) => {
  if(Cypress._.isString(selector) && selector.startsWith('//')) {
    return cy.xpath(selector).check()
  } else {
    return cy.get(selector).check()
  }
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })