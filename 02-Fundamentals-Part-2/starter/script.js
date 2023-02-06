"use strict"; // Modo estrito js

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive `);

*/

// const interface = "audio";
// const private = 534;

//-------------------------------------------------//

// Functions

/*
function logger() {
  console.log(`My name is Elias`);
}

logger();
logger();
logger();

function fruitsProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitsProcessor(100, 99);
console.log(appleJuice);

const appleOrangeJuice = fruitsProcessor(5, 99);
console.log(appleOrangeJuice);
*/

//-------------------------------------------------//

// Functions declarations vs expressions

/*
// Declaration
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calAge1(2000);

// Expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);

console.log(age1, age2);
*/

//-------------------------------------------------//

// Arrow Functions

/*
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires om ${retirement}`;
};

console.log(yearsUntilRetirement(2000, `Elias`));
console.log(yearsUntilRetirement(1988, `Bob`));
*/

//-------------------------------------------------//
// Functions callng others function

/*
const cutPieces = function (fruits) {
  return fruits * 4;
};

const fruitsProcessor = function (apples, oranges) {
  const applesPieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applesPieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
};

console.log(fruitsProcessor(2, 5));

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retired in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired ${retirement}`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1941, "Bill"));
*/

//-------------------------------------------------//

// Desafio #1

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//-------------------------------------------------//

// Arrays

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; // Inicia com elemento 0
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // Inicia com elemento 1
console.log(friends[friends.length - 1]); // Portanto 3 - 1 puxa elemento 2

friends[2] = "Jay";
console.log(friends);
// friends = ['bobs', 'alice'] proibido

const firstName = "Jonas";
const jonas = [firstName, "Schemedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercicio

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages);
*/

//-------------------------------------------------//

// Basic arrays operations

// addd elements
/*
const friends = ["Michael", "Steven", "Peter"];
const newLenght = friends.push("Jay"); // add um new element in final array
console.log(friends);
console.log(newLenght);

friends.unshift("Jonh"); // add new element in first array
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const popped = friends.pop(); // remove element and return
console.log(friends);
console.log(popped);

friends.shift(); // remove first element
// const shiftR = friends.shift(); // remove element and return
console.log(friends);
// console.log(shiftR);

console.log(friends.indexOf("Steven")); // return number of array
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // return value boolean if have in array TRUE
console.log(friends.includes("Bob")); // FALSE
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven!`);
}
*/

//-------------------------------------------------//

// Desafio #2
/*
const calTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

//-------------------------------------------------//

// Objects

// const jonasArray = [
//   // array nao pode colocar palvras-chaves para ser mencionados
//   "Jonas", // apenas por seus numeros
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray);

// const jonasObj = {
//   fisrtName: "Jonas",
//   lastName: "schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonasObj);

// Dot vs Bracket Notation

/*
const jonasObj = {
  firstName: "Jonas",
  lastName: "schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonasObj);

console.log(jonasObj.lastName);
console.log(jonasObj["lastName"]);

const nameKey = "Name";
console.log(jonasObj["first" + nameKey]);
console.log(jonasObj["last" + nameKey]);

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose beetwen firstName, lastName, age, job, and friends`
);
console.log(jonasObj[interestedIn]);

if (jonasObj[interestedIn]) {
  console.log(jonasObj[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose beetwen firstName, lastName, age, job, and friends`
  );
}

jonasObj.location = "Portugal";
jonasObj["Twitter"] = "@jonasschemedtman";
console.log(jonasObj);

console.log(
  `${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[0]}`
);

*/

// Objects Methods
/*
const jonasObj = {
  firstName: "Jonas",
  lastName: "schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} ia a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonasObj.calcAge());
console.log(jonasObj.age);

console.log(jonasObj.getSummary());

*/

//-------------------------------------------------//

// Desafio #3

/*
O codigo abaixo viola os termos da programacao por ter
o mesmo codigo para diversas situacoes, mas no momento usei
isto apenas com o conhecimento que tenho, e futuramente aprender
programacao ORIENTADA A OBJETOS para isso abaixo nao se repetir

const mark = {
  fullName: "Mark Miller",
  height: 1.95,
  mass: 92,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jonh = {
  fullName: "Jonn Smith",
  height: 1.69,
  mass: 78,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
jonh.calcBMI();
console.log(mark.bmi);
console.log(jonh.bmi);

if (mark.calcBMI() > jonh.calcBMI()) {
  console.log(`${mark.calcBMI()} ${mark.fullName}`);
} else if (jonh.calcBMI() > mark.calcBMI()) {
  console.log(`${jonh.calcBMI()} ${jonh.fullName}`);
}
*/

//-------------------------------------------------//

// Loop For

// Loop for continua em execucao enquanto a condicao for true

/*

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️`);
}

for (inicializador; condição-saída; expressão-final) {
  // código para executar
}

const jonas = [
  "Jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Lendo de jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Preenchendo o array types
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

//  Continue and break
console.log(`---ONLY STRINGS---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log(`---BREAK WITH NUMBER---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}



// loop array inverso


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}


// loop in loop

 loop executa a primeira vez e se tiver um outro loop dentro ele executara o loop
o 2 loop o tanto de vez q foi passado e depois retonar ao 1 looop e assim por diante
igual o exemplo abaixo 


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`${exercise}: Lifiting weight repetition ${rep}`);
  }
}
*/

//-------------------------------------------------//

// Loop while
/*

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifiting weights repetition ${rep}`);
// }

/*
  loop while declaramos o inicializador antes, e no final do loop o contador
  let rep = 10;
  while (rep < 10) {
    console.log(ele sera executado dez vezes enquanto a condicao for true);
    rep++
  }


// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifiting weights repetition ${rep}`);
//   rep++;
// }
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  // enquanto dice !== desigual a 6 continuara rodando
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1); // usar expressao para terminar o loop
  if (dice === 6) console.log(`Loop is about to end...`);
}

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
