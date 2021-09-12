context('second level page', () => {
  const subtopics = '[data-cytest="subtopics-list"]';
  it('Should display page', () => {
    const homepageTopics = '[data-cytest="topics-list"]';
    cy.get(homepageTopics).last().click();
  });
  it('Should display breadcrumb', () => {
    const breadcrumb = '[data-cytest="breadcrumb"]';
    cy.get(breadcrumb).should('be.visible');
  });
  it('Should display headline', () => {
    const hometitle = '[data-cytest="headline"]';
    cy.get(hometitle).should('be.visible');
  });
  it('Clicking a subtopic should direct to next page', () => {
    cy.get(subtopics).children().first().click();
    cy.location('pathname').should('match', /nl\/nl\/customer-service\/support\/assistance/);
    cy.go('back');
  });
});
