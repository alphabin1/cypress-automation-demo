const Page = require('./page')

/**
 * Below are the element selectors which will be used throughout the class.
 */
const ELEMENTS = {
    CHECKOUT: '#checkout',
    FIRST_NAME: '#first-name',
    LAST_NAME: '#last-name',
    POSTAL_CODE: '#postal-code',
    CONTINUE_BUTTON: '#continue',
    PURCHAED_PRODUCT: '.inventory_item_name',
    FINISH_BUTTON: '#finish',
    COMPLETE_ORDER_TEXT: '.complete-header',
    BACK_HOME_BUTTON: '#back-to-products'
};

class CheckoutPage extends Page {


    /**
     * To click on the checkout button.
     */
    clickOnCheckoutButton() {
        this.clickOn(ELEMENTS.CHECKOUT);
    }

    /**
     * Fill out the checkout form
     */
    fillCheckoutForm(firstname, lastname, postalcode) {
        this.typeIn(ELEMENTS.FIRST_NAME, firstname)
        this.typeIn(ELEMENTS.LAST_NAME, lastname)
        this.typeIn(ELEMENTS.POSTAL_CODE, postalcode)
        this.clickOn(ELEMENTS.CONTINUE_BUTTON)
    }

    /**
     * Verify purchased product
     */
    verifyPurchasedProductIsVisible() {
        this.waitTillElementIsDisplayed(ELEMENTS.PURCHAED_PRODUCT)
    }

    /**
     * Click on the Finish button to order complete
     */
    clickOnFinishButton() {
        this.clickOn(ELEMENTS.FINISH_BUTTON)
    }

    /**
     * Verify complete order text is visible
     */
    verifyCompleteOrderText() {
        this.waitTillElementIsDisplayed(ELEMENTS.COMPLETE_ORDER_TEXT)
    }

    /**
     * Click on the Back Home button
     */
    clickOnBackHomeButton() {
        this.clickOn(ELEMENTS.BACK_HOME_BUTTON)
    }
}

module.exports = new CheckoutPage();
