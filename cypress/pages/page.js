
/**
 * Element locator strategies used by cypress.
 * @type {{XPATH: string, CSS: string}}
 */
const ELEMENT_TYPE = {
    XPATH: 'xpath',
    CSS: 'css'
};

class Page {
    constructor() {
        /** @protected @type {{XPATH: string, CSS: string}} */
        this.ELEMENTS_TYPE = ELEMENT_TYPE;
    }

    /**
     * 
     * @param {string} url url when you want to redirect
     */
    redirectURL(url) {
        cy.visit(url)
    }

    /**
     * This method will wait till page is being loaded.
     */
    waitForPageLoading() {
        cy.get('body').should('visible');
    }

    /**
     * Waiting for element displayed.
     * @param {string} selector An element locator(selector).
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[*]>>|Cypress.Chainable<JQuery<HTMLElement>>}
     */
    waitTillElementIsDisplayed(selector) {
        return cy.waitUntilVisible(selector)
    }

    /**
     * This method will check that given element is not exist.
     * @param {string} selector An element locator
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[*]>>|Cypress.Chainable<JQuery<HTMLElement>>}
     */
    elementShouldNotExist(selector) {
        return cy.elementShouldNotExist(selector)
    }

    /**
     * Type in to the Input type Elements.
     * @param {string} selector An element locator.
     * @param {string} text The text string to be entered in the input field.
     */
    typeIn(selector, text) {
        cy.inputType(selector, text);
    }

    slowType(selector, locator, text, pressEnter = false) {
    }

    /**
     * Type in to the Input type Elements.
     * @param {string} selector An element locator.
     */
    getText(selector) {
        return cy.getText(selector)
    }

    /**
     * To click on element(buttons, radio-buttons, checkboxes etc..)
     * @param {string} selector An element locator.
     */
    clickOn(selector) {
        cy.clickBySelector(selector)
    }

    /**
     * This is the common method to select the "Checkbox" or "Radio button"
     * @param {string} selector An element locator value.
     */
    check(selector) {
        cy.elementCheck(selector)
    }

    /**
     * This method is used to select value from drop-down menu.
     * @param {object} dropDownButtonElement A dropdown button, when it's clicked dropdown input field will be shown.
     * @param {object} dropDownInputElement A dropdown input element.
     * @param {string} option The drop-down option text to be enetered into the drop-down input field.
     */
    selectValue(dropDownButtonElement, dropDownInputElement, option) {
        const { dropDownButtonElType, dropDownButtonElLocator } = dropDownButtonElement;
        const { dropDownInputElType, dropDownInputElLocator } = dropDownInputElement;
        this.clickOn(dropDownButtonElType, dropDownButtonElLocator);
        this.waitTillElementIsDisplayed(dropDownInputElType, dropDownInputElLocator)
            .click({ force: true })
            .type(option)
            .type('{enter}');
    }
}

module.exports = Page;
