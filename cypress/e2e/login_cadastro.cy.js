describe('Fluxo de Cadastro e Login', () => {
  it('Acessa a página de login', () => {
    cy.visit('/commands/actions');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });

  it('Simula preenchimento de formulário de login', () => {
    cy.get('.action-email')
      .type('teste@exemplo.com')
      .should('have.value', 'teste@exemplo.com');

    cy.get('.action-password')
      .type('senhaSegura123')
      .should('have.value', 'senhaSegura123');
  });
});
