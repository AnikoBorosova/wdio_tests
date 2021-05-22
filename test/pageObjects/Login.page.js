const Page = require("./Page");
const config = require("../../config");
const longPause = config.pauses.long;

class LoginPage extends Page {

	get userNameInput() { return this.getInput("user-name"); }
	get passowrdInput() { return this.getInput("password"); }
	get loginBtn() { return this.getBtn("login-button"); }
	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }

	async doLogin(username, password) {
		await (await this.userNameInput).setValue(username);
		await (await this.passowrdInput).setValue(password);
		await (await this.loginBtn).click();
		await (await this.shoppingCartLink.waitForDisplayed(longPause));
	}
}

module.exports = new LoginPage();
