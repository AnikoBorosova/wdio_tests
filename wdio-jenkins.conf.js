const sharedConfig = require("./wdio-shared.conf");

exports.config = {
	...sharedConfig,
	...{
		capabilities: [
			{
				maxInstances: 3,
				browserName: 'chrome',
				'goog:chromeOptions': {
					args: ['--start-maximized', '--headless', '--disable-gpu', '--window-size=1920,1080', '--no-sandbox', '--no-cache']
				}
			}
		],
		reporters: ['spec', ['allure', {
			outputDir: 'allure-results',
			disableWebdriverStepsReporting: true,
			disableWebdriverScreenshotsReporting: false,
		}]]
	}
}