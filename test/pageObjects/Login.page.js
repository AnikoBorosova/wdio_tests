const Page = require("./Page");
const config = require("../../config");
const microPause = config.pauses.long;
const inventoryPageUrl = config.urls.inventory;

class LoginPage extends Page {

	get userNameInput() { return this.getInput("user-name"); }
	get passowrdInput() { return this.getInput("password"); }
	get loginBtn() { return this.getBtn("login-button"); }
	get errorMessageElem() { return $("//h3[@data-test='error']"); }
	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }


	doLogin(userName, password) {
		this.userNameInput.waitForExist(microPause);
		this.userNameInput.click();		// workaround for a bug experienced on Firefox Nightly
		this.userNameInput.setValue(userName);
		this.passowrdInput.setValue(password);
		this.loginBtn.click();
	}

	validateCartElemIsDisplayed() {
		try {
			browser.waitUntil(() => browser.getUrl() === inventoryPageUrl, {
				timeout: microPause,
				timeoutMsg: "expect user to be logged in"
			});
			return this.shoppingCartLink.isExisting();
		} catch (error) {
			console.log("From validateCartElemIsDisplayed() ", error);
			return false;
		}
	}

	validateLoginIsUnsuccessful() {
		try {
			return this.errorMessageElem.getText().includes("locked out");
		} catch (error) {
			console.log("From validateLoginIsUnsuccessful() ", error);
			return false;
		}
	}
}

module.exports = new LoginPage();
