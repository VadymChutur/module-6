import transactions from './transacktion.js';

console.log(transactions);

{
  /* <tbody>
  <tr>
    <td>ID Transaction</td>
    <td>Summary</td>
    <td>Date</td>
    <td>Whos</td>
    <td>Type transaction</td>
    <td>Name account</td>
    <td>Number account</td>
  </tr>
</tbody>; */
}

const makeTransactionTableRowMarkup = ({
  id,
  amount,
  date,
  busness,
  type,
  name,
  account,
}) => {
  return `
  <tr>
  <td>${id}</td>
  <td>${amount}</td>
  <td>${date}</td>
  <td>${busness}</td>
  <td>${type}</td>
  <td>${name}</td>
  <td>${account}</td>
  </tr>
  `;
};

console.log(makeTransactionTableRowMarkup(transactions[0]));

const makeTransctionTableRows = transactions
  .map(makeTransactionTableRowMarkup)
  .join('');

console.log(makeTransctionTableRows);

const tableEl = document.querySelector('.js-transaction-table');

tableEl.insertAdjacentHTML('beforeend', makeTransctionTableRows);
