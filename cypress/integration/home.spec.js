context('Homepage', () => {
  const topics = '[data-cytest="topics-list"]';
  it('Reloading', () => {
    cy.reload();
  });
  it('Should display Breadcrumb', () => {
    const breadcrumb = '[data-cytest="breadcrumb"]';
    cy.get(breadcrumb).should('be.visible');
  });
  it('Breadcrumb should have a length of 3 crumbs', () => {
    const breadcrumb = '[data-cytest="breadcrumb"]';
    cy.get(breadcrumb).children().children().should('have.length', 3);
  })
  it('Should display Headline', () => {
    const hometitle = '[data-cytest="headline"]';
    cy.get(hometitle).should('be.visible');
  });

  it('Should display topics', () => {
    cy.get(topics).should('be.visible');
  });
  it('Should display FAQ', () => {
    const faq = '[data-cytest="faq"]';
    cy.get(faq).should('be.visible');
  });
  it('Clicking a topic should direct to second page', () => {
    cy.get(topics).children().last().click();
    cy.location('pathname').should('match', /nl\/nl\/customer-service\/support/);
    cy.go('back');
  });
});
