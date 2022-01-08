const loginPage = require("../pageObjects/Login.page");

const envConfig = require("../../configs/envConfig");
const mainUrl = envConfig.urls.main;

const userData = require("../../configs/testData");
const password = userData.loginData.password;
const lockedOutUser = userData.loginData.lockedOutUser;
const errorMessage = userData.errorMessages.lockedOut;

describe("Tests for unsuccessful login process with locked out user credentials", () => {

	it("tries to login with locked out user", () => {
		loginPage.open(mainUrl);
		loginPage.doLogin(lockedOutUser, password);
		expect(loginPage.validateLoginIsUnsuccessful(errorMessage)).toBe(true);
	});
});