## Automated UI-tests with WebdriverIO - wdio v7 + wdio-chromedriver-service

Website being tested: https://www.saucedemo.com/
Browser: Google Chrome

### Run the tests locally

Location of the web tests: ```./tests/specs/```

- clone the repository
- do ```npm install```
- start the tests with the command: ```npm run testLocal``` to run the locally

### Test scenarios 

Find the scenarios in ```./test/specs/```

1. Login process - positive scenario
- Navigate to main page
- Log in with valid user credentials and validate that the user is getting into their account

2. Login process - negative scenario - unregistered/locked out user
- Navigate to main page
- Try to log in with locked out user credentials and validate that the user is getting an error message

3. Login process - negative scenario - glitching user
- Navigate to main page
- Log in with valid user credentials and validate that the inventory items have incorrect images