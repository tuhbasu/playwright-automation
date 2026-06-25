import {Page, Locator} from '@playwright/test';
import {locators} from '../test-data/locators';
import { ENV } from '../config/env';
import {loginData} from '../test-data/loginData';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder(locators.usernameInput.placeholder);
        this.passwordInput = page.getByPlaceholder(locators.passwordInput.placeholder);
        this.loginButton = page.locator(locators.loginButton.selector);  
    }

    async navigateToLoginPage(){
        await this.page.goto(ENV.baseURL);
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);     
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(){
        await this.enterUsername(loginData.validUser.username);
        await this.enterPassword(loginData.validUser.password);
        await this.clickLoginButton();  
    }
}
