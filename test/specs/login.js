const LoginPage = require("../pageObjects/Login.page");

const config = require("../../config");
const mainUrl = config.urls.main;

const userData = require("../../testData/userData");
const password = userData.loginData.password;
const standardUser = userData.loginData.standardUser;
const lockedOutUser = userData.loginData.lockedOutUser;
const problemUser = userData.loginData.problemUser;
const performanceGlitchUser = userData.loginData.performanceGlitchUser;

describe("Tests for login process", () => {

	it("should login with valid credentials", () => {
		LoginPage.open(mainUrl);

		LoginPage.doLogin(standardUser, password);
		expect(LoginPage.validateCartElemIsDisplayed());
	});
});