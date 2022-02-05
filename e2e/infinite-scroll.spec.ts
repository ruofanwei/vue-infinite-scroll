/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
describe('simulate infinite scroll', () => {
  it('should display header text', () => {
    cy.visit('/')

    cy.request(Cypress.env('VITE_API_URL'))
      .then((response) => {
        expect(response.status).to.equal(200)
        let data = JSON.stringify(response)
        expect(data).to.have.length.of.at.least(5)
        expect(data).to.not.be.null
        JSON.parse(data).body.forEach(function (item: any) {
          expect(item).to.have.property('title')
          expect(item).to.have.property('price')
          expect(item).to.have.property('description')
        })
      })
      .wait(1000)

    cy.scrollTo('bottom', { duration: 3000 }).wait(500)

    cy.request(Cypress.env('VITE_LOADMORE_URL'))
      .then((response) => {
        expect(response.status).to.equal(200)
        let data = JSON.stringify(response)
        expect(data).to.have.length.of.at.least(10)
        expect(data).to.not.be.null
        JSON.parse(data).body.forEach(function (item: any) {
          expect(item).to.have.property('title')
          expect(item).to.have.property('price')
          expect(item).to.have.property('description')
        })
      })
      .wait(1000)

    cy.scrollTo('top', { duration: 2000 }).wait(1000)

    cy.scrollTo('bottom', { duration: 3000 }).wait(2000)

    cy.scrollTo('top', { duration: 2000 }).wait(1000)
  })
})
