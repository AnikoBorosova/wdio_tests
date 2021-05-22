const LoginPage = require("../pageObjects/Login.page");

const config = require("../../config");
const mainUrl = config.urls.main;

const userData = require("../../testData/userData");
const password = userData.password;
const standardUser = userData.standardUser;
const lockedOutUser = userData.lockedOutUser;
const problemUser = userData.problemUser;
const performanceGlitchUser = userData.performanceGlitchUser;

describe("Tests for login process", () => {

	it("should login with valid credentials", async () => {
		await LoginPage.open(mainUrl);

		await LoginPage.doLogin(standardUser, password);
		await expect(LoginPage.shoppingCartLink.isDisplayed()).to.eventually.be.true;
	});
});