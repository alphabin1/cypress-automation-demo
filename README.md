# Cypress Automation Demo
## _Cypress Automation_

This project contains automated tests using Cypress version 12 for both headless and headful execution. It provides a starting point for setting up and running Cypress tests from scratch.

## _Prerequisites_
Before running the tests, ensure that you have the following:
- Node.js: Download and install Node.js
- npm: Included with Node.js installation

## _Setup_
1. Nagivate to the project directory
    ```
    cd Cypress_Demo
    ```
2. Install the dependencies
    ```
    npm install
    ```
    
## _Headless Execution_

To run the tests in headless mode, follow the below steps:
1. Execute the below command:
    ```
    npm run web-headless
    ```
2. Cypress will display the progress in the terminal and generate test reports in the cypress/reports directory.
3. Once the tests have completed, the generated test reports can be found in the cypress/reports directory.

## _Headful Execution_

To run the tests in mode, follow the below steps:
1. Execute the below command:
    ```
    npm run web-headful
    ```
2. In the Test Runner window, click on the test file you want to run, and the tests will start executing in a browser window.
3. Cypress will display the progress in the Test Runner window, and you can view the test results in real-time.

## _Test Configuration_ 

The test configuration can be customized in the `cypress.config.js` file. You can modify the following properties:
 - `baseUrl`: The base URL for the application under test.
 - `reporterOptions`: Configuration options for the Cypress Mochawesome reporter

## _Writing Tests_

You can find demo test file in the `cypress/e2e` directory. Feel free to modify them or create new test files based on your requirements.