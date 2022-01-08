const Page = require("./Page.page");

class inventoryPage extends Page {

	get shoppingCartLink() { return this.getAnchorElem("shopping_cart_link"); }
	get itemImageArray() { return $$(`//img[@class='inventory_item_img']`); }

	get imageSrcArray() {
		let srcList = this.itemImageArray.map(i => i.getAttribute("src"));
		return srcList;
	}

	validateItemImageSrc(imgSrc) {
		try {
			const allSrcMatching = this.imageSrcArray.every((src) => src.includes(imgSrc));
			return allSrcMatching;
		} catch (error) {
			console.log("From validateItemImageSrc() ", error);
			return false;
		}
	}
}

module.exports = new inventoryPage();