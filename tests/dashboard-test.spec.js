import { test, expect } from '@playwright/test'; // Import necessary functions and objects from Playwright test library
import { DashboardPage } from '../page-objects/dashboardPage'; // Import DashboardPage class from page-objects directory
import * as usersData from '../test-data/users.json'; // Import test data files for users data
import * as dashboardData from '../test-data/dashboardData.json';// Import test data files for dashboard data

// Test suite for Dashboard navigation functionality
test.describe('Dashboard Navigation Functionality', () => {

  // Loop through each user from test data
  for (const user of usersData.users) {
    let dashboardPage; // Declare dashboardPage variable

    // Before each test, initialize DashboardPage and open login page
    test.beforeEach(async ({ page }) => {
      dashboardPage = new DashboardPage(page);
      await dashboardPage.openLoginPage();
    });

    // Test to verify top menu is displayed for the current user
    test(`Top menu is displayed for ${user.name}`, async () => {
      await dashboardPage.login(user.email, user.password);
      await dashboardPage.verifyNavigationMenu();
    });

    // Test to verify sign out functionality for the current user
    test(`Ensure user ${user.name} can successfully logout and return to login page`, async () => {
      await dashboardPage.login(user.email, user.password);
      await dashboardPage.verifyNavigationMenu();
      await dashboardPage.logout();
      await expect(dashboardPage.loginButton).toBeVisible();
    });

    // Test to verify dashboard page bottom text is displayed correctly for the current user
    test(`Ensure ${user.name} can view dashboard body text after logging in`, async () => {
      await dashboardPage.login(user.email, user.password);
      await expect(dashboardPage.bottomText).toContainText(dashboardData.bottomText);
    });

    // Test to verify dashboard page body text is displayed correctly for the current user
    test(`Ensure ${user.name} can view bottom text after logging in`, async () => {
      await dashboardPage.login(user.email, user.password);
      await expect(dashboardPage.bodyText).toContainText(dashboardData.dashboardBodyText);
    });

    // Test to verify console logs after login for the current user
    test(`Ensure console logs user ${user.name} successful login`, async ({ page }) => {
      // Promise to capture console logs
      const consoleLogPromise = new Promise(resolve => {
        page.on('console', msg => resolve(msg.text()));
      });
      await dashboardPage.login(user.email, user.password);
      const consoleLogText = await consoleLogPromise;
      expect(consoleLogText).toContain(`User logged: ${user.email}`);
    });
  }
});
