const Page = require("./Page.page");
const config = require("../../config");
const incorrectImgSrc = config.imgSrcIncorrect;

class inventoryPage extends Page {

	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }
	get itemImageArray() { return $$(`//img[@class='inventory_item_img']`); }

	get imageSrcArray() {
		let srcList = this.itemImageArray.map(i => i.getAttribute("src"));
		return srcList;
	}

	validateItemImagesAreIncorrect() {
		try {
			const allSrcMatching = this.imageSrcArray.every((src) => src.includes(incorrectImgSrc));
			return allSrcMatching;
		} catch (error) {
			console.log("From validateItemImagesAreIncorrect() ", error);
			return false;
		}
	}
}

module.exports = new inventoryPage();
