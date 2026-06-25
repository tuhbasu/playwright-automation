import { test ,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Visual test - inventory page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Step 1: Navigate and login
    await loginPage.navigateToLoginPage();
    await loginPage.login();    

    // Step 2: Verify page loaded
    await inventoryPage.verifyInventoryPageURL();
    await inventoryPage.verifyProductTitle();

    // Step 3: VISUAL TEST ✅
    await expect(page).toHaveScreenshot('inventory-page.png', {
        fullPage: true
    });

});