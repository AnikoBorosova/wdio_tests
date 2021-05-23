const loginPage = require("../pageObjects/Login.page");
const inventoryPage = require("../pageObjects/Inventory.page");

const config = require("../../config");
const mainUrl = config.urls.main;

const userData = require("../../testData/userData");
const password = userData.loginData.password;
const problemUser = userData.loginData.problemUser;

describe("Tests for problematic user", () => {

	it("checks that items' images are not correct and all the same", () => {
		loginPage.open(mainUrl);
		loginPage.doLogin(problemUser, password);
		expect(inventoryPage.validateItemImagesAreIncorrect());
	});
});