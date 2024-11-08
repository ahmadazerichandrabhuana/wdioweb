import { $ } from "@wdio/globals";
import Page from "./page.js";
import allureReporter from '@wdio/allure-reporter';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Main Input
    get textHeaderLogin() { return $('//div[@class="login_logo"]'); }
    get inputUsername() { return $('//input[@data-test="username"]'); }
    get inputPassword() { return $('//input[@data-test="password"]'); }
    get buttonLogin() { return $('//input[@data-test="login-button"]'); }
    // Errors
    get iconErrorUsername() { return $('//input[@data-test="username"]/following-sibling::*[name()="svg"][contains(@class, "error_icon")]'); }
    get iconErrorPassword() { return $('//input[@data-test="password"]/following-sibling::*[name()="svg"][contains(@class, "error_icon")]'); }
    get textHeaderError() { return $('//h3[@data-test="error"]'); }
    get buttonError() { return $('//button[@data-test="error-button"]'); }
    get iconButtonError() { return $('//button[@data-test="error-button"]/*[name()="svg"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async inputUsernameField(username) {
        allureReporter.startStep('Input Username Field');
        await this.inputUsername.setValue(username);
        allureReporter.endStep();
    }

    async inputPasswordField(password) {
        allureReporter.startStep('Input Password Field');
        await this.inputPassword.setValue(password);
        allureReporter.endStep();
    }

    async clickLoginButton() {
        allureReporter.startStep('Click Login Button');
        await this.buttonLogin.click();
        allureReporter.endStep();
    }

    async verifyLoginPageOK() {
        allureReporter.startStep('Verify All Element on Login Page are Shown');
        await expect(this.textHeaderLogin).toBeExisting();
        await expect(this.inputUsername).toBeExisting();
        await expect(this.inputPassword).toBeExisting();
        await expect(this.buttonLogin).toBeExisting();
        await expect(this.textHeaderLogin).toHaveText('Swag Labs');
        await expect(this.inputUsername).toHaveAttribute('placeholder', 'Username');
        await expect(this.inputPassword).toHaveAttribute('placeholder', 'Password');
        await expect(this.buttonLogin).toHaveAttribute('value', 'Login');
        allureReporter.endStep();
    }

    async verifyLoginPageOKFailed() {
        allureReporter.startStep('Verify All Element on Login Page are Shown... but Failed');
        await expect(this.textHeaderLogin).toBeExisting();
        await expect(this.inputUsername).toBeExisting();
        await expect(this.inputPassword).toBeExisting();
        await expect(this.buttonLogin).toBeExisting();
        await expect(this.textHeaderLogin).toHaveText('Swag Labs');
        await expect(this.inputUsername).toHaveAttribute('placeholder', 'Username');
        await expect(this.inputPassword).toHaveAttribute('placeholder', 'Password');
        await expect(this.buttonLogin).toHaveAttribute('value', 'Logins');
        allureReporter.endStep();
    }

    async verifyErrorOnUsernameField() {
        allureReporter.startStep('Verify Error Icon on Username Field is Exist');
        await expect(this.iconErrorUsername).toBeExisting();
        allureReporter.endStep();
    }

    async verifyErrorOnPasswordField() {
        allureReporter.startStep('Verify Error Icon on Password Field is Exist');
        await expect(this.iconErrorPassword).toBeExisting();
        allureReporter.endStep();
    }

    async verifyErrorUsernameIsRequired() {
        allureReporter.startStep('Verify Error is "Epic sadface: Username is required"');
        await expect(this.textHeaderError).toBeExisting();
        await expect(this.buttonError).toBeExisting();
        await expect(this.iconButtonError).toBeExisting();
        await expect(this.textHeaderError).toHaveText('Epic sadface: Username is required');
        allureReporter.endStep();
    }

    async verifyErrorUsernameAndPasswordDoNotMatch() {
        allureReporter.startStep('Verify Error is "Epic sadface: Username and password do not match any user in this service"');
        await expect(this.textHeaderError).toBeExisting();
        await expect(this.buttonError).toBeExisting();
        await expect(this.iconButtonError).toBeExisting();
        await expect(this.textHeaderError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        allureReporter.endStep();
    }

    async verifyLoginPageDisappear() {
        allureReporter.startStep('Verify Login Page is not Shown anymore');
        await this.textHeaderLogin.waitForDisplayed({ reverse: true });
        await this.inputUsername.waitForDisplayed({ reverse: true });
        await this.inputPassword.waitForDisplayed({ reverse: true });
        await this.buttonLogin.waitForDisplayed({ reverse: true });
        allureReporter.endStep();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        allureReporter.addStep('Open Login Page');
        return super.open('');
    }
}

export default new LoginPage();