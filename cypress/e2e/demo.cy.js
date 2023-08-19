const loginPage = require('../pages/login.page');
const productPage = require('../pages/product.page');
const checkoutPage = require('../pages/checkout.page');
const logoutPage = require('../pages/logout.page')

describe('Smoke tests:', () => {

   let productName = 'Sauce Labs Backpack'

   beforeEach(() => {
      loginPage.redirectToTheLoginpage(Cypress.env('url'))
   })

   it('Invalid Login', () => {
      loginPage.verifyLoginPageIsDisplayed();
      
      cy.fixture('login.data.json').then(loginData => {
         loginPage.doLogin(loginData.fakeusername, loginData.fakepassword);
      });

      loginPage.verifyLoginErrorIsVisible();
   })

   it('Verify valid user should be able to add product and checkout',async () => {
      //Verify login page
      loginPage.verifyLoginPageIsDisplayed();

      // login with valid credentials
      cy.fixture('login.data.json').then(loginData => {
         loginPage.doLogin(loginData.username, loginData.password);
      });

      // verify product page after successfull login
      productPage.verifyProductsPageIsVisible();
      cy.wait(1000)
      
      // verify add to card functionality
      productPage.clickOnAddToCardButton()
      cy.wait(2000)
      productPage.clickOnCartContainer()

      // verify checkout method
      checkoutPage.clickOnCheckoutButton()
      cy.fixture('checkout.data.json').then(checkoutData => {
         checkoutPage.fillCheckoutForm(checkoutData.firstname, checkoutData.lastname, checkoutData.postalcode);
      });

      // Verify finish order
      checkoutPage.verifyPurchasedProductIsVisible()
      checkoutPage.clickOnFinishButton()
      checkoutPage.verifyCompleteOrderText()
      checkoutPage.clickOnBackHomeButton()

      // Verify logout functionality
      logoutPage.clickOnMenuButton()
      logoutPage.clickOnLogoutButton()

       //Verify login page
       loginPage.verifyLoginPageIsDisplayed();
   });
});
