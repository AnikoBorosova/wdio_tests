const fs = require("fs");
const path = require("path");
const nconf = require("nconf");

let envConfigJson = require("./test/testData/envConfig");
let testDataJson = require("./test/testData/userData");

// write env configs and test data into separate folder
const stringedTestDataJson = JSON.stringify(testDataJson);
const stringedEnvConfigJson = JSON.stringify(envConfigJson);

let configDir = path.join(__dirname, "./configs");
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir);
}

fs.writeFileSync(
    path.join(configDir, "envConfig.json"),
    stringedEnvConfigJson
);

fs.writeFileSync(
    path.join(configDir, "testData.json"),
    stringedTestDataJson
);