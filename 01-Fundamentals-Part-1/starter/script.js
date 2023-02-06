// Valores e Variaveis

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_martilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myCurrentJob);
*/

//-------------------------------------------------//

// Tipos De Dados

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "Yes!!!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

//-------------------------------------------------//

// Let, Const, Var

/*
let age = 30;
age = 31;

const birthYear = 1991;
const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

//-------------------------------------------------//

// Operadores Logicos

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 exponenciacao de 2 por 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schemedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5; // = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;

console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//-------------------------------------------------//

// Operadores De Precedencia

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//-------------------------------------------------//

// Desafio #1

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

//-------------------------------------------------//

// Strings e Templates Literais

/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I`m " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear},year old ${job}!`;
console.log(jonasNew);

console.log("String com \n\
multiplas\n\
linhas");

console.log(`String com
multiplas
linhas`);
*/

//-------------------------------------------------//

// If e Else Condicionais

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// If Else Training

const time = 1;

if (time < 10) {
  greeting = `Good Morning`;
} else if (time < 20) {
  greeting = `Goog Day`;
} else {
  greeting = `Good Evening`;
}
console.log(greeting);

const pet = "cat";

if (pet === "lizard") {
  console.log(`I own a lizard`);
} else if (pet === "dog") {
  console.log(`I own a dog`);
} else if (pet === "cat") {
  console.log(`I own a cat`);
} else if (pet === "snake") {
  console.log(`I own a snake`);
} else if (pet === "parrot") {
  console.log(`I own a parrot`);
} else {
  console.log(`I don't own a pet`);
}

const literCar = 4;
const modelCar = "Audi";

if (literCar <= 1) {
  console.log(`My ${modelCar} is ${literCar}.0L`);
} else if (literCar <= 2) {
  console.log(`My ${modelCar} is ${literCar}.0L`);
} else {
  console.log(`My ${modelCar} is ${literCar}.0L`);
}
*/

//-------------------------------------------------//

// Desafio #2

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
*/

//-------------------------------------------------//

// Tipo de conversão e coerção

// Tipo de conversão

/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// Tipo de coerção
console.log("I am" + 23 + " years old ");
console.log("23" - "10" + 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//-------------------------------------------------//

// Valores verdadeiros e falsos
// 5 Valores falsos: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log(`Don't spend it all ;`);
} else {
  console.log(`You should get a job!`);
}
*/

//-------------------------------------------------//

// Operadores de igualdade: == vs ===

/*
const age = 18;
if (age === 18) {
  console.log(`You just became an adult (strict)`);
}

if (age == 18) {
  console.log(`You just became an adult (loose)`);
}

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number!`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`Why not 23?`);
*/

//-------------------------------------------------//

// Logica Boolean
// AND OR NOT

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

let peso = 31.1;
let status = "";

if (peso < 20.7) {
  status = "Abaixo do peso";
} else if (peso >= 20.7 && peso < 26.4) {
  status = "Peso normal";
} else if (peso >= 26.4 && peso < 27.8) {
  status = "Pouco acima do peso";
} else if (peso >= 27.8 && peso < 31.1) {
  status = "Acima do peso";
} else {
  status = "Obeso";
}

console.log(status);

let userName = "usuario123";
let password = "123456";

if (userName == "usuario123" && password == "123456") {
  console.log("Usuário autenticado");
} else {
  console.log("Login e/ou senha incorrretos");
}
*/

//-------------------------------------------------//

// Desafio #3

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy!');
}

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
*/

//-------------------------------------------------//

// Estrutura Switch

/*
const day = "sunday";

switch (day) {
  case "monday": // day == "monday"
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code example`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day`);
}

const expr = "Laranjas";

switch (expr) {
  case "Laranjas":
    console.log("As laranjas custam $0.59 o quilo.");
    break;
  case "Maçãs":
    console.log("Maçãs custam $0.32 o quilo.");
    break;
  case "Bananas":
    console.log("Bananas custam $0.48 o quilo.");
    break;
  case "Cerejas":
    console.log("Cerejas custam $3.00 o quilo.");
    break;
  case "Mangas":
  case "Mamões":
    console.log("Mangas e mamões custam $2.79 o quilo.");
    break;
  default:
    console.log("Desculpe, estamos sem nenhuma " + expr + ".");
}

console.log("Tem algo mais que você gostaria de levar?");


if (day === "") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

//-------------------------------------------------//

// Statements and Expressions

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

//-------------------------------------------------//

// Operador Condicional Ternario

/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷") // True executa
  : console.log("I like to drink water 💧"); // False executa

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);

let speed = 134;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";

console.log(message);
*/

//-------------------------------------------------//

// Desafio #4

/*
// OPERADOR && TRUE SE AMBAS FOREM TRUE
// SE A EXPRESSAO FOR TRUE, EXECUTA O 1 TERNARIO QUE E TRUE
// SE A EXPRESSAO FOR FALSE, EXECUTA O 2 TERNARIO QUE E FALSO 
// O QUE A 1 EXPRESSA RETORNAR SERA EXECUTADO O MESMO NO TERNARIO 
// 1 EXPRESSAO = TRUE, EXECUTA TRUE NO TERNARIO
// 1 EXPRESSAO = FALSE, EXECUTA FALSE NO TERNARIO 

const bill = ;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; 
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
