context('Navigation', () => {
  it('Should go to a topic page when you click on the topic list', () => {
    const homepageTopics = '[data-cytest="topics-list"]';
    cy.get(homepageTopics).children().last().click();
    cy.location('pathname').should('match', /nl\/nl\/customer-service\/support\/get-help/);
  });

  it('Should go to a contact method page when clicking on a subtopic', () => {
    const pageSubTopics = '[data-cytest="subtopics-list"]';
    cy.get(pageSubTopics).children().last().click();
    cy.location('pathname').should('match', /nl\/nl\/customer-service\/support\/assistance/);
  });
});
