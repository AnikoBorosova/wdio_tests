const loginPage = require("../pageObjects/Login.page");

const config = require("../../config");
const mainUrl = config.urls.main;

const userData = require("../../testData/userData");
const password = userData.loginData.password;
const lockedOutUser = userData.loginData.lockedOutUser;

describe("Tests for unsuccessful login process with locked out user credentials", () => {

	it("tries to login with locked out user", () => {
		loginPage.open(mainUrl);

		loginPage.doLogin(lockedOutUser, password);
		expect(loginPage.validateLoginIsUnsuccessful()).toBe(true);
	});
});