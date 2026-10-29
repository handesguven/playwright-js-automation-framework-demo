
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
├── .github/workflows/
│   └── playwright.yml
├── Pages/
│   └── LoginPage.js
├── tests/
│   └── login.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Test Coverage
- Login with valid credentials
- Login with invalid password
- Login with empty username
- Login with empty password

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
