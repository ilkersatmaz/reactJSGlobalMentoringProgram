describe('SearchBox', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });


  it('displays the search box and searches for a movie "', () => {
    cy.get("input[placeholder=\"What do you want to watch?\"]").should('be.visible');
    cy.get("button").contains('search').should('be.visible');

    cy.get("input").type('Black Panther');
    cy.get("button").contains('search').click();
    cy.request('GET', 'http://localhost:4000/movies?limit=20&searchBy=title&search=Black%20Panther', {
      headers: {
        accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      expect(response.body).to.have.property('data');
      expect(response.body.data[0].title).to.be.equal('Black Panther');
    });
  });

});
