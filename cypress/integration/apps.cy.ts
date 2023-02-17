import { appTabs } from '@/shared/constants';

describe('Apps Page', () => {
  describe('Apps List Page of Top Category', () => {
    beforeEach(() => {
      cy.intercept(
        {
          method: 'GET',
          url: '/categories/*',
        },
        { fixture: appTabs }
      ).as('getApplicationsList');

      cy.visit('http://localhost:3000/categories/top');
    });
  });
});
