import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {ENV} from '../config/env';

test.describe('SauceDemo Login Flow Tests', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
    });

    test('Login and verify inventory page', async ({page}) => {
        await test.step('Navigate to login page', async () => {
            await loginPage.navigateToLoginPage();
            await expect(page).toHaveURL(ENV.baseURL);
        });

        await test.step('Login with valid credentials', async () => {
            await loginPage.login();
        });

        await test.step('Navigate to inventory page', async () => {
           await inventoryPage.navigateToInventoryPage();
        });

        await test.step('Validate URL and product title', async () => {
            await inventoryPage.verifyInventoryPageURL();
            await inventoryPage.verifyProductTitle();
        });

        await test.step('Take screenshot of the page', async () => {
            await inventoryPage.takeLoginSuccessScreenshot();
        });
    });
});
