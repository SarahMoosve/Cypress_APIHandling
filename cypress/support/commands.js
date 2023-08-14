// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.card-title').each(($e1, index, $list) => {
        if($e1.text().includes(productName))
        {
            cy.get('.btn.btn-info').eq(index).click()
        }
    })
 })

 Cypress.Commands.add("selectCountry", (CountryName) => {
    cy.wait(1000)
    cy.get('.suggestions > ul > li > a').each(($e1, index, $list) => {
        
        if($e1.text().includes(CountryName))
        {
            $e1.click()
        }
    })
 })
 Cypress.Commands.add("successMessage", (expectedMessage) => {
    cy.get('.alert').then(function(element)
    {
        const actualText = element.text().trim()
        console.log('expected Text is: ', expectedMessage)
        console.log('Actual Text is: ', actualText)
        expect(actualText.includes(expectedMessage)).to.be.true
    })
})

Cypress.Commands.add("LoginAPI", () => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {userEmail: "sarah@gmail.com", userPassword: "Abc123!@#"})
    .then(function(response)
    {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})



//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })