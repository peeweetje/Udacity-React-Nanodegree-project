/// <reference types="cypress" />

  beforeEach(()=>{
      cy.visit('/')
    })

describe('render the home page', () => {

    it('should find select and the correct option', ()=>{
        cy.get('select').eq(0).select('currentlyReading')
        .should('have.value','currentlyReading')
     })
     it('should navigate to the search-page', ()=> {
      cy.get('[data-cy="search-link-users"]').click();
      cy.visit('http://localhost:3000/search');
     })
    })

   