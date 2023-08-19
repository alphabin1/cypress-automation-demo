const Page = require('../pages/page')

/**
 * Below are the element selectors which will be used throughout.
 */
const ELEMENTS = {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button',
    ERROR_VISIBLE: '[data-test="error"]',
};

class LoginPage extends Page {


    /**
     * @param {string} url URL where you want to redirect.
     */
    redirectToTheLoginpage(url) {
        this.redirectURL(url)
    }

    /**
     * To check that Login page is displayed.
     */
    verifyLoginPageIsDisplayed() {
        this.waitTillElementIsDisplayed(ELEMENTS.USERNAME_INPUT);
        this.waitTillElementIsDisplayed(ELEMENTS.PASSWORD_INPUT);
        this.waitTillElementIsDisplayed(ELEMENTS.LOGIN_BUTTON);
    }

    /**
     * To do login.
     * @param {string} username A username.
     * @param {string} password The password of the username.
     */
    doLogin(username, password) {
        this.typeIn(ELEMENTS.USERNAME_INPUT, username);
        this.typeIn(ELEMENTS.PASSWORD_INPUT, password);
        this.clickOn(ELEMENTS.LOGIN_BUTTON);
    }

    /**
     * To check that Login error with invalid credentials.
     */
    verifyLoginErrorIsVisible() {
        this.waitTillElementIsDisplayed(ELEMENTS.ERROR_VISIBLE)
    }
}

module.exports = new LoginPage();
