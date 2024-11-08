import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Simple test for saucedemo.com 001', () => {
    it('As a User, I will see Header "Swag Labs", input field Username, input field Password, and Login button on the Login Page', async () => {
        await LoginPage.open();
        await LoginPage.verifyLoginPageOK();
    });
})
