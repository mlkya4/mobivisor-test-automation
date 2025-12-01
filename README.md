# Mobivisor Test Automation

End-to-end test automation project for the **Mobivisor MDM** web application.  
The project uses **CodeceptJS** with the **Playwright** helper and follows the **Page Object** pattern.

## 📁 Project Structure

```text
mobivisorTestOtomasyonu/
├── codecept.conf.js        # CodeceptJS configuration
├── pages/                  # Page Objects
│   ├── LoginPage.js
│   ├── NavbarFragment.js
│   ├── MyLocationPage.js
│   └── WifiConfiguration.js
├── tests/                  # Test scenarios
│   ├── JS_myLocation_test.js
│   ├── JS_WifiConfig_tests.js
│   └── ...
└── package.json
🧰 Tech Stack
Node.js

CodeceptJS

Playwright

Page Object Model (POM)

✅ Implemented Test Scenarios (Examples)
Login

Admin user can log in successfully.

Locations (My Locations)

User should be able to add a new location.

User should be able to edit existing location.

User should be able to search location in table.

Wi-Fi Configuration

User should be able to add new Wi-Fi configuration.

User should be able to edit existing Wi-Fi configuration.

User should be able to clone Wi-Fi configuration.

User should be able to delete cloned or existing Wi-Fi configuration (if not assigned to a policy).

(Yeni senaryolar ekledikçe buraya listeleyebilirsin.)

⚙️ Setup
Clone this repository:

bash
Copy code
git clone https://github.com/mlkya4/mobivisor-test-automation.git
cd mobivisor-test-automation
Install dependencies:

bash
Copy code
npm install
Environment variables / config

Update codecept.conf.js (baseURL, browser, helpers, etc.) according to your environment.

Example:

js
Copy code
helpers: {
  Playwright: {
    url: 'https://your-mobivisor-url',
    show: true,
    browser: 'chromium'
  }
}
▶️ Running Tests
Run all tests with steps:

bash
Copy code
npx codeceptjs run --steps
Run a single test file:

bash
Copy code
npx codeceptjs run tests/JS_myLocation_test.js --steps
(İsteğe bağlı olarak package.json içine script ekleyebilirsin:)

json
Copy code
"scripts": {
  "test": "codeceptjs run --steps"
}
Sonra sadece:

bash
Copy code
npm test
🧱 Page Object Structure
Example MyLocationPage responsibilities:

Click “Policies” menu

Navigate to “My Locations”

Click “Add New” button

Fill location fields (city, coordinate, details, etc.)

Verify that location is visible in table

This keeps test scenarios clean and readable:

js
Copy code
Scenario('The user should be able to add a new location.', async ({ I, myLocationPage, navbarFragment }) => {
  navbarFragment.clickPoliciesMenu();
  navbarFragment.clickMyLocation();

  myLocationPage.clickAddNewButton();
  myLocationPage.fillSearchLocationField('Bingöl');
  myLocationPage.clickLocationDetails();
  myLocationPage.fillDistanceLocationFields('12');
  myLocationPage.clickSaveButton();
  myLocationPage.verifyTextIsVisible('Bingöl');
});
📝 Future Improvements
Add test reports (Allure / HTML report)

Integrate with CI (GitHub Actions / GitLab CI)

Add more negative test scenarios

Add parallel test execution
