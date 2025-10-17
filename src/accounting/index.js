// Application Node.js - Gestion des comptes étudiants
// Conversion de la logique COBOL en JavaScript


let balance = 1000.00;

function resetBalance() {
  balance = 1000.00;
}

function getBalance() {
  return parseFloat(balance.toFixed(2));
}

function credit(amount) {
  if (isNaN(amount) || amount <= 0) {
    return 'Invalid amount.';
  }
  balance += amount;
  return getBalance();
}

function debit(amount) {
  if (isNaN(amount) || amount <= 0) {
    return 'Invalid amount.';
  }
  if (amount > balance) {
    return 'Retrait impossible, solde insuffisant';
  }
  balance -= amount;
  return getBalance();
}

// Interface interactive conservée pour usage manuel
if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    rl.question('Enter your choice (1-4): ', handleMenu);
  }

  function handleMenu(choice) {
    switch (choice.trim()) {
      case '1':
        console.log(`Current balance: ${getBalance().toFixed(2)}`);
        showMenu();
        break;
      case '2':
        rl.question('Enter credit amount: ', (amount) => {
          const creditAmount = parseFloat(amount);
          const result = credit(creditAmount);
          if (typeof result === 'string') {
            console.log(result);
          } else {
            console.log(`Amount credited. New balance: ${result.toFixed(2)}`);
          }
          showMenu();
        });
        break;
      case '3':
        rl.question('Enter debit amount: ', (amount) => {
          const debitAmount = parseFloat(amount);
          const result = debit(debitAmount);
          if (typeof result === 'string') {
            console.log(result);
          } else {
            console.log(`Amount debited. New balance: ${result.toFixed(2)}`);
          }
          showMenu();
        });
        break;
      case '4':
        console.log('Exiting the program. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        showMenu();
    }
  }

  showMenu();
}

module.exports = { getBalance, credit, debit, resetBalance };
