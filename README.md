# Cypress_APIHandling
In the repository, various ways are used to mock, intercept and send HTTP requests using Cypress.

## Project Structure
- `describe`: is a Mocha function that groups related test cases. This suite is focused on mocking HTTP request/responses.
- `first it block`: This test case mocks an HTTP GET request and checks the response.
    - `cy.intercept()` -  is used to mock the HTTP GET request. When the application makes a request to the specified URL, Cypress will intercept it and respond with the provided mock data instead of the actual data from the server
    - `cy.visit()` - after setting up the intercept, test navigates to specific URL performs the operation
    - `cy.wait()` - waits for the intercepted request to complete.

- `second it block`: This test case intercepts an HTTP GET request and modifies the request URL before it's sent.
    - `cy.intercept()` -  is used to intercept and modify the request. The request URL is changed to query for books by another author
    - `cy.visit()` - test navigates to specific URL performs the operation
    - `cy.wait()` - waits for the intercepted request to complete.

- `third it block`: This test case demonstrates how to make an HTTP POST request without interacting with the frontend using Cypress.
    - `cy.request()` - sends a POST request to add a book. The request payload contains details about the book


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
After opening, select the desired .js OR

5. Run a Specific Feature:
```bash
npx cypress run --spec "path_to_project/Cypress_APIHandling/cypress/integration/pageObject/HttpIntercept.js"
```
This will run all the tests in headless mode


