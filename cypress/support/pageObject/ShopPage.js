class ShopPage
{
    getCheckout()
    {
        return cy.get(".btn-primary")
    }

    getProceedToPayment()
    {
        return cy.get(".btn-success")
    }

    getLocation()
    {
        return cy.get("#country")
    }
    getDeliverLocation()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    get Checkbox()
    {
        return cy.get('#checkbox2')
    }

    getPurchase()
    {
        return cy.get('input[value="Purchase"]')
    }
    getSuccessAlert()
    {
        return cy.get('.alert')
    }
    getContinueShopping()
    {
        return cy.get('btn-default')
    }
    getAmountOfAll()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalAmount()
    {
        return cy.get('tr td:nth-child(5) strong')
    }
}
export default ShopPage;