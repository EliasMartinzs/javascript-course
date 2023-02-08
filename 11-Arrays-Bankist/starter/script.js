'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc) {
  containerMovements.innerHTML = '';

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
   <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
     <div class="movements__value">${mov}€</div>
 </div>
   `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}Eur`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUi = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balnce
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

// Event Handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display Ui And Message
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update Ui
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing The Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update Ui
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update Ui
    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.find(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Lectures methods arrays , replace , join , slice , splice etc

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// Method forEach
// looping in array with for of
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('For Of -------------------');
for (const mov of movements) {
  if (mov > 0) {
    console.log(`you deposited ${mov}`);
  } else {
    console.log(`you withdraw ${Math.abs(mov)}`);
  }
}
console.log('ForEach -------------------');
// looping in array with ForEach
movements.forEach((move, i) => {
  if (move > 0) {
    console.log(`movements ${i + 1} ,you deposited ${move}`);
  } else {
    console.log(`movements ${i + 1} ,you withdraw ${Math.abs(move)}`);
  }
});

// Method Map
const currencies = new Map([
  ['USD', 'United States'],
  ['EUR', 'Europe'],
  ['REAL', 'Brazil'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

// Method Set
const currenciesUnique = new Set([
  'eur',
  'dolar',
  'bgp',
  'eur',
  'dolar',
  'bgp',
]);

currenciesUnique.forEach((value, _, map) => {
  console.log(`${value} : ${value}`);
});
*/

// Data Transformation Arrays : Map , Reduce , Filter
/*
// Method Map

const eurToUSd = 1.1;
const movementsUsd = movements.map(mov => mov * eurToUSd);

console.log(movementsUsd);

const movementsDescritions = movements.map((mov , i ,arr) => 
  `Movement ${i + 1} You: ${mov > 0 ? 'deposit' : 'withdrawal'}`
)
console.log(movementsDescritions)


// Method Filter

const deposit = movements.filter(mov => mov > 0);
console.log(deposit);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);


// Method Reduce
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
 
let balancePlus = 0;
for (const mov of movements) balancePlus += mov;
console.log(balancePlus);


// Maximun Value with Reduce
const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(max);


// Map, Reduce, Filter
const eurToUsd = 1.1;
const totalDeposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDeposit);


// Method Find
const person = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(person);


// Method Includes
// Equality
console.log(movements.includes(-130));

// Method Some
// Condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
*/

// Method Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));

// Method Flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [3, [2, [3]], [4, 5, 6, [4]]];
console.log(arrDeep.flat(2));

// Method Flat
const newAllMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur);
console.log(newAllMovements);
