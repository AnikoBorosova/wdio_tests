module.exports = class Page {

	open(path) {
		return browser.url(path);
	}

	$(xPath) {
		const element = $(xPath);
		element.xPath = xPath;
		return element;
	}

	getInput(id) {
		return this.$(`//input[@id='${id}']`);
	}

	getAnchorElem(elemClass) {
		return this.$(`//a[@class='${elemClass}']`);
	}
}