import { expect } from "@playwright/test"; // Import necessary functions and objects from Playwright test library
import { LoginPage } from "./loginPage"; // Import LoginPage class from current directory
import * as dashboardData from '../test-data/dashboardData.json'; // Import dashboard data from test-data directory

// Define DashboardPage class extending LoginPage
export class DashboardPage extends LoginPage {

  // Constructor to initialize the DashboardPage with page locators
  constructor(page) {
    super(page) // Call the constructor of the parent class (LoginPage)
    this.page = page // Assigning the Playwright 'page' object to the instance property 'page'
    this.homeButton = page.locator('.home') // Locator for home button
    this.productsButton = page.locator('.products') // Locator for products button
    this.contactButton = page.locator('.contact') // Locator for contact button
    this.userButton = page.locator('.user') // Locator for user button
    this.signOutButton = page.locator('#logout') // Locator for sign out button
    this.bodyText = page.locator('#content div') // Locator for body text
    this.bottomText = page.locator('footer > p'); // Locator for bottom text
  }

  // Asynchronous method to verify the navigation menu
  async verifyNavigationMenu () {
    await expect(this.homeButton).toContainText(dashboardData.navigationMenu.homeButtonText) // Verify home button text
    await expect(this.productsButton).toContainText(dashboardData.navigationMenu.productsButtonText) // Verify products button text
    await expect(this.contactButton).toContainText(dashboardData.navigationMenu.contactButtonText) // Verify contact button text
    await expect(this.userButton).toBeVisible() // Verify user button visibility
  }

  // Asynchronous method to logout
  async logout () {
    await this.userButton.click() // Click on user button
    await this.signOutButton.click() // Click on sign out button
  }
}
