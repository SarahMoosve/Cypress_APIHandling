class HttpIntercept
{
getvirtualLibraryButton()
{
    return cy.get("button[class='btn btn-primary']")
}

getTableLength()
{
    return cy.get('tr')
}
    
}

export default HttpIntercept;