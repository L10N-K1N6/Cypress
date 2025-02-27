describe('MODA', () => {
  beforeEach(() => {
    cy.visit('https://192.168.0.219:8443/modadm/v1/login')
    cy.get('#username').click().wait(1000).type('rootmatc').wait(1000)
    cy.get('#password').click().wait(1000).type('Caracas1.').wait(1000)
    cy.get('.btn').click().wait(1000)
  })
/*Olvide la clave
  it('Passforgit', () => {
      cy.get('.mb-1 > a').click().wait(1000)
      cy.wait(1500)
      cy.get('#usuario').click().wait(1000)
      cy.wait(1500)
      cy.get('#usuario').type('rootmatc').wait(1000)
      cy.wait(1500)
      cy.get('#correo').click({ force: true }).wait(1000)
      cy.wait(1500)
      cy.get('#correo').type('Caracas1.').wait(1000)
      cy.get('.mb-1 > a').click()

      //validar perfil usuario//
    cy.get('.navbar-nav > :nth-child(1) > .nav-link').click().wait(1000).click().wait(1000)
    cy.get('.user-panel').click().wait(1000)
    cy.get('.card-tools > .btn').click().wait(1000).click().wait(1000)
    cy.get('.btn-danger').click().wait(1000)
  })
  */
  it('Merchants', ()=> {
    //Buscar Merchant//
    
    cy.get('.nav > :nth-child(1) > .nav-link').click().wait(1000)
    cy.get('.btn-success').click(3000)

    //Form Crear//
    cy.get('#alias').click().wait(1000).type('cypress').wait(1000)
    cy.get('#ipMerchant').click().wait(1000).type('localhost').wait(1000)
    cy.get('#puerto').click().wait(1000).type('8888abc').wait(1000)
      .invoke('val') //Permite obtener el valor actual del campo para ser evaluado en la aserción.
      .should('match', /^\d+$/) // Verifica que el valor contiene solo números

    cy.get('#tpduMensaje').click().wait(1000).type('123abc').wait(1000)
      .invoke('val')
      .should('match', /^\d+$/) 

    cy.get('#origen').click().wait(1000).type('318abc').wait(1000)
      .invoke('val')
      .should('match', /^\d+$/)

    cy.get('#destino').click().wait(1000).type('764abc').wait(1000)
      .invoke('val')
      .should('match', /^\d+$/)

    cy.get('#ssl').select('1').wait(1000)
      .should('have.value', '1') // Verifica que el valor es '1'
      .select('0').wait(1000)
      .should('have.value', '0') // Verifica que el valor es '0'
    cy.get('#estatus').select('1').wait(1000)
      .should('have.value', '1') // Verifica que el valor es '1'
      .select('0').wait(1000)
      .should('have.value', '0') // Verifica que el valor es '0'
    //cy.get('.btn-success').click().wait(1000) // Wait for the button click to process

  
    cy.get('.nav > :nth-child(1) > .nav-link').click().wait(1000)
    cy.get('.ml-2 > .btn-primary').click().wait(1000)
    cy.get('.table-striped').should('be.visible')
      .find('td')
      .contains('1166') // Encuentra la celda que contiene 'Cypress' 
      .parent() // Obtiene la fila padre de la celda encontrada
      .find('td').last() // Encuentra la última celda de esa fila
      .find('.fas') // Encuentra el botón'editar'
      .click(); 

      //cy.get()
   /*
   cy.get('#ipMerchant').click().wait(2000)
    cy.get('.nav > :nth-child(2) > .nav-link').click().wait(1000)
    cy.get('.nav > :nth-child(3) > .nav-link').click().wait(1000)
    cy.get(':nth-child(4) > .nav-link').click().wait(1000)
    cy.get(':nth-child(5) > .nav-link').click().wait(1000)
    cy.get(':nth-child(6) > .nav-link').click().wait(1000)
    cy.get(':nth-child(7) > .nav-link').click().wait(1000)
    cy.get(':nth-child(8) > .nav-link').click().wait(1000)
    cy.get(':nth-child(9) > .nav-link').click().wait(1000)
    cy.get(':nth-child(10) > .nav-link').click().wait(1000)
    cy.get(':nth-child(11) > .nav-link').click().wait(1000)
    cy.get(':nth-child(12) > .nav-link').click().wait(1000)
    cy.get(':nth-child(13) > .nav-link').click().wait(1000)
    cy.get('form > .btn').click().wait(1000)
    */
  
  }) 
  






})
