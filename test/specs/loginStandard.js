const loginPage = require("../pageObjects/Login.page");

const envConfig = require("../../configs/envConfig");
const mainUrl = envConfig.urls.main;

const userData = require("../../configs/testData");
const password = userData.loginData.password;
const standardUser = userData.loginData.standardUser;

describe("Tests for successful login process with valid user credentials", () => {

	it("should login with valid credentials", () => {
		loginPage.open(mainUrl);
		loginPage.doLogin(standardUser, password);
		expect(loginPage.validateCartElemIsDisplayed()).toBe(true);
	});
});