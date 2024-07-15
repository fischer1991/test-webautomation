import { test, expect } from '@playwright/test'; // Import necessary functions and objects from Playwright test library
import { LoginPage } from '../page-objects/loginPage'; // Importing the LoginPage class from page-objects/loginPage.js
import * as usersData from '../test-data/users.json'; // Importing user data from JSON file
import * as testData from '../test-data/loginData.json'; // Importing login test data from JSON file
  
// Test suite describing the Login Page functionality
test.describe('Login Functionality', () => {
  
  let loginPage; // Variable declaration for the LoginPage instance
  
  // Before each test, initialize the LoginPage object with the current 'page' instance
  test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page); // Creating a new instance of LoginPage
    await loginPage.openLoginPage(); // Navigating to the login page
  })
  
  // Test to confirm login attempt with incorrect password
  test('Confirm login attempt with incorrect password', async () => {
    await loginPage.login(usersData.users[0].email, '1234'); // Calling the login method with user email and incorrect password
    await expect(loginPage.loginPageTitle).toHaveText(testData.titleText); // Asserting that the login page title matches expected text
  })
  
  // Test to ensure correct display of login page header text
  test('Ensure correct display of login page header text', async ({ page }) => {
    await expect(page).toHaveTitle(testData.headerText); // Asserting that the page title matches expected header text
  })
  
  // Test to ensure correct display of login page title text
  test('Ensure correct display of login page title text', async () => {
    await expect(loginPage.loginPageTitle).toHaveText(testData.titleText); // Asserting that the login page title matches expected title text
  })
  
  // Test to ensure correct display of login page bottom text
  test('Ensure correct display of login page bottom text', async () => {
    await expect(loginPage.loginPageBottomText).toHaveText(testData.bottomText); // Asserting that the bottom text on the login page matches expected text
  })
})
