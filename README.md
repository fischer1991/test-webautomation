# Test Automation Web with Playwright

This is a web automation project written in JavaScript using the Playwright framework. The project contains automated tests for login and dashboard functionalities of a web application.

### Directories and Files

- **css/**, **img/**, **js/**: Contains assets for the web application.
- **node_modules/**: Contains the project's dependencies.
- **page-objects/**: Contains Page Object Model (POM) classes:
  - `dashboardPage.js`: Defines the Dashboard page and its methods.
  - `loginPage.js`: Defines the Login page and its methods.
- **playwright-report/**: Contains the Playwright test reports.
- **test-data/**: Contains JSON files with test data:
  - `dashboardData.json`: Contains data related to the dashboard tests.
  - `loginData.json`: Contains data related to the login tests.
  - `users.json`: Contains user credentials for the tests.
- **test-results/**: Contains the results of the executed tests.
- **tests/**: Contains the test specifications:
  - `dashboard-test.spec.js`: Contains tests for dashboard functionalities.
  - `login-test.spec.js`: Contains tests for login functionalities.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **index.html**: The main HTML file for the web application.
- **package-lock.json**: Automatically generated for locking the versions of the project's dependencies.
- **package.json**: Contains metadata about the project and its dependencies.
- **playwright.config.js**: Configuration file for Playwright.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system. This project uses Playwright, which can be installed via npm.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/fischer1991/test-webautomation.git
2. Navigate to the project directory
   ```
   cd test-webautomation
   ```
4. Install the dependencies
    ```
    npm install
    ```
6. Install Playwright
   ``` 
   npm install @playwright/test
   ```
8. Install the necessary browsers for Playwright
   ```   
   npx playwright install
   ```

## Running the Tests
To execute the tests, navigate to the tests directory in your code editor. Open either dashboard-test.spec.js or login-test.spec.js and click the play button (▶️) located next to the test or test suite you want to run.

## Command Line
  -  You can run the tests with the playwright test command. This will run the tests on all browsers as configured in the playwright.config file.
```
npx playwright test
``` 
  -  Run tests on different browsers
To specify which browser you would like to run the tests on, use the --project flag followed by the name of the browser.
```
npx playwright test --project webkit
```
   - To specify multiple browsers to run the tests on, use the --project flag multiple times followed by the name of each browser.
```
npx playwright test --project webkit --project firefox
```
   - To run a single test file, pass in the name of the test file that you want to run.
```
npx playwright test login-test.spec.ts
```

## Test reports
The HTML Reporter shows you a full report of the tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report is opened automatically if some of the tests failed, otherwise you can open it with the following command.
```
npx playwright show-report
```

## Configuration
The Playwright configuration is defined in playwright.config.js. This file includes settings such as test directory, retries, timeouts, and browser options.
