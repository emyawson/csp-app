context('Get support page', () => {
  const topics = '[data-cytest="topics-list"]';
  const subtopics = '[data-cytest="subtopics-list"]';
  it('Should display page', () => {
    cy.get(topics).last().click();
    cy.get(subtopics).last().click();
  });
  it('Should display breadcrumb', () => {
    const breadcrumb = '[data-cytest="breadcrumb"]';
    cy.get(breadcrumb).should('be.visible');
  });
  it('Should display headline', () => {
    const headline = '[data-cytest="headline"]';
    cy.get(headline).should('be.visible');
  });
  it('Should display selfservice headline', () => {
    const headline = '[data-cytest="selfservice-headline"]';
    cy.get(headline).should('be.visible');
  });
  it('Should display selfservice description', () => {
    const description = '[data-cytest="selfservice-description"]';
    cy.get(description).should('be.visible');
  });
  it('If there is self service button then it should be visible', () => {
    const buttonSelfService = '[data-cytest="button-selfService"]';
    cy.get(buttonSelfService).then((element) => {
      if (element.length > 0) {
        return cy.get(buttonSelfService).should('be.visible');
      }
      return cy.log('there is no button but that is OK');
    });
  });
  it('If there is selfservice recommended label then it should be visible', () => {
    const selfserviceLabel = '[data-cytest="recommended-label"]';
    cy.get(selfserviceLabel).then((element)=> {
      if (element.length > 0) {
        return cy.get(selfserviceLabel).should('be.visible');
      }
      return cy.log('there is no label but that is OK');
    });
  });
  it('Should display contactcard headline', () => {
    const headline = '[data-cytest="contactcard-headline"]';
    cy.get(headline).should('be.visible');
  });
  it('Should display contactcard description', () => {
    const description = '[data-cytest="contactcard-description"]';
    cy.get(description).should('be.visible');
  });
  it('Should display contactcard button', () => {
    const button = '[data-cytest="contactcard-button"]';
    cy.get(button).should('be.visible');
  });
});
