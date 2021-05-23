const loginPage = require("../pageObjects/Login.page");

const config = require("../../config");
const mainUrl = config.urls.main;

const userData = require("../../testData/userData");
const password = userData.loginData.password;
const standardUser = userData.loginData.standardUser;

describe("Tests for successful login process with valid user credentials", () => {

	it("should login with valid credentials", () => {
		loginPage.open(mainUrl);

		loginPage.doLogin(standardUser, password);
		expect(loginPage.validateCartElemIsDisplayed()).toBe(true);
	});
});