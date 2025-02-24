describe('MODA', () => {
  beforeEach(() => {
    cy.visit('https://192.168.0.219:8443/modadm/v1/login')
    cy.pause()
  })
  it('Passforgit', () => {
      cy.get('.mb-1 > a').click()
      cy.pause()
      cy.get('#usuario').click()
      cy.pause()
      cy.get('#usuario').type('rootmatc')
      cy.pause()
      cy.get('#correo').click({ force: true })
      cy.pause()
      cy.get('#correo').type('Caracas1.')
      cy.get('.mb-1 > a').click()
  })
  it('MenuTask', ()=> {
    cy.get('#username').click()
    cy.pause()
    cy.get('#username').type('rootmatc')
    cy.pause()
    cy.get('#password').click()
    cy.pause()
    cy.get('#password').type('Caracas1.')
    cy.get('.btn').click()
    cy.pause()
    cy.get('.btn-primary').click()
    cy.pause()
    cy.get('.btn-danger').click()
    cy.get('.nav > :nth-child(1) > .nav-link').click()
    cy.pause()
    cy.get('.nav > :nth-child(2) > .nav-link').click()
    cy.get('.nav > :nth-child(3) > .nav-link').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(':nth-child(6) > .nav-link').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get(':nth-child(8) > .nav-link').click()
    cy.get(':nth-child(9) > .nav-link').click()
    cy.get(':nth-child(10) > .nav-link').click()
    cy.get(':nth-child(11) > .nav-link').click()
    cy.get(':nth-child(12) > .nav-link').click()
    cy.get(':nth-child(13) > .nav-link').click()
    cy.get('form > .btn').click()
  
  })
  






})
