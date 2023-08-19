const Page = require('../pages/page')

/**
 * Below are the element selectors which will be used throughout the class.
 */
const ELEMENTS = {
    MENU_BUTTON: '#react-burger-menu-btn',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button',
    ERROR_VISIBLE: '[data-test="error"]',
    LOGOUT_BUTTON: "#logout_sidebar_link"
};

class LogoutPage extends Page {

    /**
     * To check that Login page is displayed.
     */
    clickOnMenuButton() {
        this.clickOn(ELEMENTS.MENU_BUTTON)
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

    /**
     * To click on the Logout button
     */
    clickOnLogoutButton() {
        this.clickOn(ELEMENTS.LOGOUT_BUTTON)
    }
}

module.exports = new LogoutPage();
