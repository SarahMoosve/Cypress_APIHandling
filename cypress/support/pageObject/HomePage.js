class HomePage
{

    getName()
    {
        return cy.get('form input[name="name"]')
    }

    getBindingTextField()
    {
        return cy.get('h4 input[name="name"]')
    }

    getEmail()
    {
        return cy.get('form input[name="email"]')
    }

    getPassword()
    {
        return cy.get('#exampleInputPassword1')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEmploymentStatus()
    {
        return cy.get('#inlineRadio1').first()
    }

    getDisabledButton()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return  cy.get(":nth-child(2) > .nav-link")
    }

    getDateOfBirth()
    {
        return cy.get('input[name="bday"]')
    }

    getSubmit()
    {
        return cy.get('input[type="submit"]')
    }

    getSuccess()
    {
        return cy.get('.alert-success')
    }
}

export default HomePage;