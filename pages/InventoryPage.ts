import {expect, Locator, Page} from '@playwright/test';
import {locators} from '../test-data/locators';
import { ENV } from '../config/env';

export class InventoryPage{
    readonly page: Page;
    readonly productTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.productTitle = page.getByText(locators.productTitle.text);
    }

    async navigateToInventoryPage(){
        await this.page.goto(ENV.inventoryPath);
    }

    async verifyInventoryPageURL(){
        await expect(this.page).toHaveURL(ENV.inventoryPath);
    }

    async verifyProductTitle(){
        await expect(this.productTitle).toBeVisible();
    }

    
    async takeLoginSuccessScreenshot() {
    await this.page.screenshot({
      path: ENV.screenshotPath,
      fullPage: true
        });
    }

}