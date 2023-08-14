# Cypress_APIHandling
This repository contains E2E tests for an e-commerce website using Cypress with the MOCHA framework. The project follows the Page Object Model (POM) design pattern, ensuring maintainability and scalability of the test suite.
## Project Structure
- E2E Tests:`Home.js` and `Shop.js` are present inside the integration folder that covers the end-to-end testing of the ecommerce application 
- Page Object Model: All locators are defined in the integration>pageObject folder:

    - `HomePage.js` - Contains locators and methods for the PageName1 page.
    - `ShopPage.js` - Contains locators and methods for the PageName2 page.

- Commands: This folder contains custom cypress commands which are frequently used inside the application

## Setup & Installation
1. Clone the Repository:

git clone https://github.com/yourUsername/Cypress_Practice_Projects.git
cd Cypress_Practice_Projects
2. Install Dependencies:
```bash
npm install
```
3. Configuration: Ensure your configurations are correctly set in the appropriate .json file inside the fixtures folder.

4. Running the Tests
```bash
npx cypress open
```
After opening, select the desired feature file or run all tests as needed.

5. Run a Specific Feature:
```bash
npx cypress run --spec "path/to/ecommerce.feature"
```


Page Object Model
The Page Object Model (POM) is a design pattern that allows for better test maintenance and reduces code duplication. A page object is created for each page of the application, and it encapsulates the page's locators and functions. By following the POM pattern, any changes in the UI can be easily managed in the page object, without having to change the test logic or step definitions.

