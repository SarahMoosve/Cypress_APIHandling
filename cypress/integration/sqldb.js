/// <reference types="Cypress" />

context('Window', () =>{

    it('Database Interaction', () => {
        cy.sqlServer("select * from Persons").then(function(result){
            console.log(result[0][1]) //print first row's second element 
            console.log(result[1][1])

        })

    })
})