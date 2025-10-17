// Tests unitaires pour l'application Node.js de gestion des comptes étudiants
const { exec } = require('child_process');

describe('Account Management System', () => {
  let app;
  beforeEach(() => {
    app = require('./index');
    app.resetBalance();
  });

  test('TC01 - Consultation du solde initial', () => {
    // Simuler la consultation du solde initial
    // À adapter si la logique est dans des fonctions exportées
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC02 - Créditer le compte étudiant', () => {
    app.credit(100);
    expect(app.getBalance()).toBe(1100.00);
  });

  test('TC03 - Débiter le compte étudiant (solde suffisant)', () => {
    app.debit(50);
    expect(app.getBalance()).toBe(950.00);
  });

  test('TC04 - Débiter le compte étudiant (solde insuffisant)', () => {
    expect(app.debit(2000)).toBe('Retrait impossible, solde insuffisant');
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC08 - Créditer avec un montant négatif ou nul', () => {
    expect(app.credit(-10)).toBe('Invalid amount.');
    expect(app.credit(0)).toBe('Invalid amount.');
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC09 - Débiter avec un montant négatif ou nul', () => {
    expect(app.debit(-10)).toBe('Invalid amount.');
    expect(app.debit(0)).toBe('Invalid amount.');
    expect(app.getBalance()).toBe(1000.00);
  });
});
