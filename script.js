let balance = 0.00;
const transactionList = document.getElementById('transaction-list');
const balanceElement = document.getElementById('balance');

document.getElementById('transaction-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  if (category === 'income') {
    balance += amount;
  } else {
    balance -= amount;
  }

  balanceElement.innerText = balance.toFixed(2);

  const transactionElement = document.createElement('li');
  transactionElement.innerText = `${description}: $${amount.toFixed(2)} (${category})`;
  transactionList.appendChild(transactionElement);

  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
  document.getElementById('category').value = 'income';
});
