// @ts-nocheck
// import 'cypress-axe';
 
context('DefaultTest', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
    })
    it('Default Value 15', () => {
      cy.visit('https://www.lambdatest.com/selenium-playground/');
      cy.get('section.mb-50 > div > ul > li:nth-child(13) > a', {force: true}).click({force: true});
      cy.wait(7000);
 
      cy.get('.sp__range-success input')
      cy.get('output[id="rangeSuccess"]').invoke('val', 95).trigger('change')
      cy.wait(6000);
      cy.get('output[id="rangeSuccess"]').should('have.text', '95')
    })
 
    it("InputFormSecond", () =>{
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        /*cy.injectAxe();
        cy.checkA11y('#seleniumform > :nth-child(1)');
        cy.checkA11y('#seleniumform > :nth-child(2)');
        cy.checkA11y('#seleniumform > :nth-child(4)');
        cy.checkA11y('#seleniumform > :nth-child(5)');*/
        cy.get(`input[name='name']`).type('Bhaskar');
        cy.get('#inputEmail4').type('bhaskaryamala6@gmail.com')
        cy.get('#inputPassword4').type('Bh@sk@r6302')
        cy.get('#company').type('delta')
        cy.get('#websitename').type('deltaweklke')
        // cy.get('#seleniumform >:nth-child(3) select').type('i')
        cy.get('#seleniumform >:nth-child(3) select option').each(($a, index, $list) => {
            if ($a.text() === 'India') {
                cy.wrap($a).click({ force: true })
            }
        })
        cy.get('#inputCity').type('hyderabed')
        cy.get('#inputAddress1').type('Madhapur')
        cy.get('#inputAddress2').type('doctors colony')
        cy.get('#inputState').type('telengana')
        cy.get('#inputZip').type('500081')
        cy.contains('button', 'Submit').click()
        cy.get('.success-msg ').then((w) => {
            expect(w.text()).to.be.equal('Thanks for contacting us, we will get back to you shortly.')
        })
    })
})