const path = require('path'); // Importing Node.js path module for working with file and directory paths

// Exporting the LoginPage class for use in other modules
export class LoginPage {

  constructor(page) {
    this.page = page; // Assigning the Playwright 'page' object to the instance property 'page'
    this.emailField = page.locator('#email'); // Locating the email input field on the page
    this.passwordField = page.locator('#password'); // Locating the password input field on the page
    this.loginButton = page.locator('input#login'); // Locating the login button on the page
    this.loginPageTitle = page.locator('#login h1'); // Locating the title element within the login section
    this.loginPageBottomText = page.locator('footer > p'); // Locating the paragraph element within the footer
  }

  // Asynchronous method to open the login page
  async openLoginPage () {
    const filePath = path.resolve(__dirname, '../index.html'); // Resolving the absolute path to the index.html file
    await this.page.goto(`file://${filePath}`); // Navigating the Playwright 'page' to the local file path
  }

  // Asynchronous method to perform login action
  async login (email, password) {
    await this.emailField.fill(email); // Entering the provided email into the email input field
    await this.passwordField.fill(password); // Entering the provided password into the password input field
    await this.loginButton.click(); // Clicking the login button to attempt login
  }
}
