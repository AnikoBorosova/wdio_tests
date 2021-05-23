const Page = require("./Page");
const config = require("../../config");
const longPause = config.pauses.long;
const inventoryPageUrl = config.urls.inventory;

class LoginPage extends Page {

	get userNameInput() { return this.getInput("user-name"); }
	get passowrdInput() { return this.getInput("password"); }
	get loginBtn() { return this.getBtn("login-button"); }
	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }

	doLogin(username, password) {
		this.userNameInput.waitForExist(longPause);
		this.userNameInput.click();		// workaround for a bug experienced on Firefox Nightly
		this.userNameInput.setValue(username);
		this.passowrdInput.setValue(password);
		this.loginBtn.click();

		browser.waitUntil(() => browser.getUrl() === inventoryPageUrl, {
			timeout: longPause,
			timeoutMsg: "expect user to be logged in"
		});
	}

	validateCartElemIsDisplayed() {
		try {
			return this.shoppingCartLink.isExisting();
		} catch (error) {
			console.log("From validateCartElemIsDisplayed() ", error);
			return false;
		}
	}
}

module.exports = new LoginPage();
