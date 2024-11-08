import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Simple test for Login into saucedemo.com', () => {
    it('As a User, I will see Error when leave Username and Password field as empty and then click Login button', async () => {
        await LoginPage.open();
        await LoginPage.clickLoginButton();
        await LoginPage.verifyErrorOnUsernameField();
        await LoginPage.verifyErrorOnPasswordField();
        await LoginPage.verifyErrorUsernameIsRequired();
    });

    it('As a User, I will see Error when input incorrect Username and Password then click Login button', async () => {
        await LoginPage.open();
        await LoginPage.inputUsernameField('MyName');
        await LoginPage.inputPasswordField('Unknown');
        await LoginPage.clickLoginButton();
        await LoginPage.verifyErrorOnUsernameField();
        await LoginPage.verifyErrorOnPasswordField();
        await LoginPage.verifyErrorUsernameAndPasswordDoNotMatch();
    });

    it('As a User, I will not see Login Page anymore when input correct Username and Password then click Login button', async () => {
        await LoginPage.open();
        await LoginPage.inputUsernameField('standard_user');
        await LoginPage.inputPasswordField('secret_sauce');
        await LoginPage.clickLoginButton();
        await LoginPage.verifyLoginPageDisappear();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
})
