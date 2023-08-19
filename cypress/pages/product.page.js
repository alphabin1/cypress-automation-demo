const Page = require('./page')

/**
 * Below are the element selectors which will be used throughout the class.
 */
const ELEMENTS = {
    PRODUCTS_LABEL: '.title',
    ADD_TO_CART: '#add-to-cart-sauce-labs-backpack',
    CART_CONTAINER: '#shopping_cart_container'
};

class ProductPage extends Page {


    /**
     * To check that Products page is displayed.
     */
    verifyProductsPageIsVisible() {
        this.waitTillElementIsDisplayed(ELEMENTS.PRODUCTS_LABEL);
    }

    /**
     * click on the Add To Cart button.
     */
    clickOnAddToCardButton() {
        this.clickOn(ELEMENTS.ADD_TO_CART)
    }

    /**
     * Click on cart container
     */
    clickOnCartContainer() {
        this.clickOn(ELEMENTS.CART_CONTAINER)
    }
}

module.exports = new ProductPage();
