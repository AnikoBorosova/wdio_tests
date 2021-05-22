const Page = require("./Page");
const config = require("../../config");
const longPause = config.pauses.long;

class LoginPage extends Page {

	get userNameInput() { return this.getInput("user-name"); }
	get passowrdInput() { return this.getInput("password"); }
	get loginBtn() { return this.getBtn("login-button"); }
	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }

	doLogin(username, password) {
		this.userNameInput.waitForEnabled(longPause);
		//this.setInputValue(this, this.userNameInput, username);
		this.userNameInput.setValue(username);
		this.passowrdInput.setValue(password);
		this.loginBtn.click();
		this.shoppingCartLink.waitForExist(longPause);
	}
}

module.exports = new LoginPage();
