const Loginpage = require('../pages/loginpage'); // Ensure the correct path

describe('GVP POM', function () {
    it('demo pom', async () => {
        await browser.url("https://the-internet.herokuapp.com/login");
        await Loginpage.entereUsername('tomsmith');
        await Loginpage.enterPassword('SuperSecretPassword!');
        await Loginpage.clickLogin();
        await Loginpage.checkMessage('You logged into a secure area!');
    });
});
