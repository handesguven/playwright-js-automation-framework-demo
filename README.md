
# Playwright JavaScript Automation Framework

A UI test automation framework built with Playwright and JavaScript to test the SauceDemo e-commerce application.


## Tech Stack

- JavaScript (ES Modules)
- Playwright Test
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions (CI/CD)



## Project Structure

```text

playwright-js-automation-framework-demo/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── Pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── fixtures/
│   └── baseTest.js
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── testData/
│   └── testData.js
├── .env.example
├── .gitignore
├── playwright.config.js
├── package.json
└── README.md

```



## Test Coverage

### Login Testing
- Login with valid credentials
- Login with invalid password
- Login with empty username
- Login with empty password

### Shopping Cart Testing
- Add and remove products from cart
- Verify shopping cart badge count
- Data-driven add-to-cart testing
- Verify multiple products in cart
- Compare product prices between Inventory and Cart

### Checkout E2E Testing
- Complete checkout with valid customer information
- Verify order confirmation message
- Data-driven checkout testing with multiple products
- Negative checkout validation for required fields
- Data-driven validation of first name, last name, and postal code


## Test Data Management

Test data is centralized in `testData/testData.js` to reduce code duplication and improve maintainability.

The framework manages:
- User credentials
- Product information
- Checkout customer information

Test data is imported and reused across multiple test files.



## Page Object Model (POM)

This framework follows the Page Object Model design pattern to improve code reusability, readability, and maintainability.

Each page has its own class containing locators and reusable methods.

- **LoginPage** – Handles login actions and error messages.
- **InventoryPage** – Manages product selection, prices, and add-to-cart actions.
- **CartPage** – Handles shopping cart navigation, product verification, and checkout navigation.
- **CheckoutPage** – Handles customer information, checkout steps, and order confirmation.

Test assertions are maintained in the test files, keeping test logic separate from page interactions.


## Custom Fixtures

The framework uses custom Playwright fixtures to provide
reusable Page Object instances across tests.

Defined in `fixtures/baseTest.js`:

- loginPage
- inventoryPage
- cartPage
- checkoutPage

This approach reduces repetitive initialization code
and improves test readability and maintainability.


## Environment Configuration

Environment variables are managed using dotenv.

1. Copy `.env.example` to `.env`.
2. Configure the application URL:

```dotenv
BASE_URL=https://www.saucedemo.com
```

The framework uses `BASE_URL` from the environment,
with a default URL configured for CI execution.

The `.env` file is excluded from Git tracking.




## Test Execution
Run all tests across Chromium, Firefox, and WebKit:

```bash
npm test
```

Run tests on a specific browser:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Run Smoke Tests:

```bash
npm run test:smoke
```

Run Regression Tests:

```bash
npm run test:regression
```

### Debugging and Failure Artifacts

The framework supports:

- Playwright HTML Reports
- Trace Viewer for step-by-step debugging
- Screenshots on test failure
- Video recording retained on failure
- GitHub Actions artifacts for test reports and results

Run a test with tracing enabled:

```bash
npx playwright test --project=chromium --trace on
```

Open the HTML report:

```bash
npx playwright show-report
```


## CI/CD

This project uses GitHub Actions to automatically run Playwright tests on every push and pull request to the main branch.

Tests run on Ubuntu across Chromium, Firefox, and WebKit.


## Test Reports

Playwright generates an HTML report after test execution.

To view the report locally:

```bash
npx playwright show-report
```

In GitHub Actions, test reports are uploaded as artifacts and can be downloaded from the workflow run.


## Author

Hande Guven

QA Automation Engineer | Software Testing | Playwright | JavaScript
