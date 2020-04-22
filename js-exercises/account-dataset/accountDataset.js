const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  let arrayoFAccounts = [];
  for (let account of bankBalances) {
    if (parseFloat(account.amount) > 100000) {
      arrayoFAccounts.push(account)
    }
  }
  return arrayoFAccounts;
}

function datasetWithRoundedDollar() {
  let bankBalanceswithRoundedDollar = [];
  for (let account of bankBalances) {
    account['rounded'] = Math.round(account.amount);
    bankBalanceswithRoundedDollar.push(account);
  }
  return bankBalanceswithRoundedDollar;
}

function sumOfBankBalances() {
  let sumOfBalance = 0;
  for (let account of bankBalances) {
    sumOfBalance += parseFloat(account.amount);
  }
  return parseFloat(sumOfBalance.toFixed(2));
}

function sumOfInterests() {
  let states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  let sumOfInt = 0;
  for (let account of bankBalances) {
    if (states.indexOf(account.state) > -1) {
      let amount =  parseFloat(account.amount);
      let interest = amount * .189;
      sumOfInt +=  interest;
    }
  }
  return sumOfInt.toFixed(2);
}

function higherStateSums() {
  let sumOfAmountStateWise = {};
  for (let account of bankBalances) {
    if (sumOfAmountStateWise[account.state]) {
      sumOfAmountStateWise[account.state] += parseFloat(account.amount);
    } else {
      sumOfAmountStateWise[account.state] = parseFloat(account.amount);
    }
  }

  let sumOfStateAmount = 0;
  Object.keys(sumOfAmountStateWise).forEach(key => {
    if (sumOfAmountStateWise[key] > 1000000) {
      sumOfStateAmount += sumOfAmountStateWise[key];
    }
  });

  return sumOfStateAmount;
 }

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
