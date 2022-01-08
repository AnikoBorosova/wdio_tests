const Page = require("./Page.page");
const inventoryPage = require("./Inventory.page");

const envConfig = require("../../configs/envConfig");
const shortPause = envConfig.pauses.short;
const inventoryPageUrl = envConfig.urls.inventory;

class LoginPage extends Page {

	get userNameInput() { return this.getInput("user-name"); }
	get passowrdInput() { return this.getInput("password"); }
	get loginBtn() { return this.getInput("login-button"); }
	get errorMessageElem() { return $("//h3[@data-test='error']"); }

	doLogin(userName, password) {
		this.userNameInput.waitForExist(shortPause);
		//this.userNameInput.click();		// workaround for a bug experienced on Firefox Nightly
		this.userNameInput.setValue(userName);
		this.passowrdInput.setValue(password);
		this.loginBtn.click();
	}

	validateCartElemIsDisplayed() {
		try {
			browser.waitUntil(() => browser.getUrl() === inventoryPageUrl, {
				timeout: shortPause,
				timeoutMsg: "expect user to be logged in"
			});
			return inventoryPage.shoppingCartLink.isExisting();
		} catch (error) {
			console.log("From validateCartElemIsDisplayed() ", error);
			return false;
		}
	}

	validateLoginIsUnsuccessful(errorMessage) {
		try {
			return this.errorMessageElem.getText().includes(`${errorMessage}`);
		} catch (error) {
			console.log("From validateLoginIsUnsuccessful() ", error);
			return false;
		}
	}
}

module.exports = new LoginPage();