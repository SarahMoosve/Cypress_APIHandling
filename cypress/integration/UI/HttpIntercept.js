/// <reference types="Cypress" />
import HttpIntercept from "../pageObject/HttpIntercept"
const httpIntercept=new HttpIntercept()


describe('Mocking HTTP request/responses', function() {

    it('HTTP request/response', function() {
        
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' }, 
            
            {
            statusCode: 200,
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301" },
                {
                     "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "DSR",
                    "aisle": "2304"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RCD",
                    "aisle": "2305"
                },
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "TSD",
                    "aisle": "2307"
                }]
            }
        ).as('BookRetrievals')
        cy.visit(Cypress.env('url') + "/angularAppdemo/")
        httpIntercept.getvirtualLibraryButton().click()
        cy.wait('@BookRetrievals').then(({response, request}) =>
        {
            httpIntercept.getTableLength().should('have.length', response.body.length+1)
        })
        //cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

    it('Intercepting HTTPs request to test if Paul can access Shettys library',function() {
 
        cy.visit(Cypress.env('url') + "/angularAppdemo/");
     
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=paul"
     
        req.continue((res)=>
        {
           // expect(res.statusCode).to.equal(403)
        })
     }
     ).as("SecurityCheck")
     
     httpIntercept.getvirtualLibraryButton().click()
     cy.wait('@SecurityCheck')
     
    })

    it('How to POST and GET data without interacting with frontend using Cypress', function() 
    {
        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php',{
            "book_name": "RestAssured with Java",
            "isbn": "RSUTEST",
            "aisle": "2301909" ,
            "author": "John Doe"}).then(function(response)
    {
        console.log(response)
       //expect(response.body).to.have.property("Msg", "successfully added")
        //expect(response.body).to.eq(200)
    })
})

})
