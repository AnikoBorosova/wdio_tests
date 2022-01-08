const loginPage = require("../pageObjects/Login.page");
const inventoryPage = require("../pageObjects/Inventory.page");

const envConfig = require("../../configs/envConfig");
const mainUrl = envConfig.urls.main;

const userData = require("../../configs/testData");
const password = userData.loginData.password;
const problemUser = userData.loginData.problemUser;
const incorrectImgSrc = userData.itemImgs.imgSrcIncorrect;

describe("Tests for problematic user", () => {

	it("checks that items' images are not correct and all the same", () => {
		loginPage.open(mainUrl);
		loginPage.doLogin(problemUser, password);
		expect(inventoryPage.validateItemImageSrc(incorrectImgSrc)).toBe(true);
	});
});