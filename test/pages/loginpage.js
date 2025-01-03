class Loginpage {
    get usernameTextbox() {
        return $('#username'); // Correct ID
    }
    get passwordTextbox() {
        return $('#password'); // Correct ID
    }
    get loginButton() {
        return $('//button[@type="submit"]'); // Correct XPath
    }
    get loginMessage() {
        return $('#flash'); // Correct ID
    }

    async entereUsername(username) {
        await this.usernameTextbox.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordTextbox.setValue(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async checkMessage(msg) {
        await expect(this.loginMessage).toBeDisplayed(); // Ensure it's visible
        const actualText = await this.loginMessage.getText();
        await expect(actualText).toContain(msg); // Check text matches
    }
}

module.exports = new Loginpage();
