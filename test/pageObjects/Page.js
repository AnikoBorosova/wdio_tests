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

	getBtn(id) {
		return this.$(`//input[@id='${id}']`);
	}

	getAnchorElem(elemClass) {
		return this.$(`//a[@class='${elemClass}']`);
	}

	setInputValue(inputElement, value) {
		const inputLength = inputElement.getValue().length;
		const backspacesForClearingInput = new Array(inputLength).fill("Backspace");
		inputElement.setValue(backspacesForClearingInput);
		inputElement.setValue(value);
	}
}
