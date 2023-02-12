/// <reference types="cypress" />

 beforeEach(()=>{
    cy.visit('/')
  })

describe('testing the viewport of the home page', () => {

  it('show a different viewport-ipad-2', ()=>{
       cy.viewport('ipad-2')
    })

   it('show a different viewport-iphone-6', ()=>{
      cy.viewport('iphone-6')
   })

   it('show a different viewport-iphone-x', ()=>{
    cy.viewport('iphone-x')
  })

   it('show a different viewport-macbook-16', ()=>{
  cy.viewport('macbook-16')
 })

  it('show a different viewport-macbook-15 on landscape', ()=>{
  cy.viewport('macbook-15','landscape')
 })
})

 