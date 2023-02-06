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

// ------------------- Movements Accounts -------------------
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
      <div class="movements__row">
        <div class="movements__type
         movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>  
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// ------------------- Balance Calc -------------------
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// ------------------- Calculate Money -------------------
const calcDisplaySumary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// ------------------- User Names -------------------
const createUserNames = f
unction (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUi = function (acc) {
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySumary(acc);
};

// Event listeners
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // Idem UserName
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // Idem Pin
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display Ui and message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display movements

    // Udate Ui
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
    // Doing The transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  // Udate Ui
  updateUi(currentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();


  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(...arr);


// SPLICE
console.log(arr.splice(2));
arr.splice(-1);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());

// CONCAT
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

// JOIN
console.log(letter.join(' - '));

// AT
const arr3 = [23, 11, 41];
console.log(arr3[0]);
console.log(arr3.at(2));

// Getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
console.log('ELias'.at(-1));
*/
/*
// Looping .ForEach
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movements1) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('forEach ----------------');
movements1.forEach(move => {
  if (move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdrew ${Math.abs(move)}`);
  }
});

console.log('forEach + [i]----------------');
movements1.forEach(function (j, i) {
  if (j > 0) {
    console.log(`Movement ${i + 1}: You deposited ${j}`);
  } else {
    console.log(`Movement ${i + 1}: You You withdre ${Math.abs(j)}`);
  }
});

// Function (200)
// Function (450)
// Function (400)
// ...
*/

/*
// ForEach Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

/*
//  Method Map ARRAY
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsMap = movements1.map(function (mov) {
  return mov * eurToUsd;
});

const movementsMap2 = movements1.map(mov => mov * eurToUsd);

console.log(movementsMap2);

const movementsUsdFor = [];
for (const mov of movements1) movementsUsdFor.push(mov * eurToUsd);

const movementsDescription = movements1.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You Desposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription);
*/

/*
// Method Filter ARRAY
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements1.filter(function (mov) {
  return mov > 0;
});

console.log(deposit);

const depositFor = [];
for (const mov of movements1) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawals = movements1.filter(moov => moov < 0);
console.log(withdrawals);

// Method Reduce ARRAY
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements1.reduce(function (acumulator, element) {
  return acumulator + element;
}, 0);

const balance2 = movements1.reduce((acc, cur) => acc + cur);

console.log(balance);
console.log(balance2);
*/

/*
// Maximun value

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements1.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements1[0]);
console.log(max);

const min = movements1.reduce((acc, cur) => {
  if (acc < cur) return acc;
  else return cur;
}, movements1[0]);
console.log(min);


// PIPELINE
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositsUSD = movements1
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

/*
// Method Find Array
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWidthDrawal = movements1.find(mov => mov < 0);
console.log(firstWidthDrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
