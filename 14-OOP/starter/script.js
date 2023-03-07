'use strict';

/*
// Basics contructor
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never to this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const elias = new Person('Elias', 2000);
const jose = new Person('Jose', 1900);
const einstein = new Person('Einstein', 1879);

// 1. New {} is created
// 2. function is called, this = {}
// 3. linked a prototype
// 4. function automatically return {}

// Prototype
// arrays, constructor, function etc inherited methods of the yours prototypes
Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

elias.calcAge();
einstein.calcAge();

// console.log(elias.__proto__, 'prototype the elias');
// console.log(elias.__proto__.__proto__, 'prototype the constructor `${Person}`');
// console.log(elias.__proto__.__proto__.__proto__, 'prototype null, inexistence');

const arr = [1, 2, 3, 4, 5, 5, 5, 4, 3];
// console.log(arr.__proto__, 'all methods inherited');
// console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`this ${this.make} is going ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`this ${this.make} is going ${this.speed}`);
};

const Bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 150);
console.log(Bmw);

Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.brake();
Bmw.brake();
Bmw.brake();
Bmw.accelerate();
Bmw.accelerate();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
*/

const Persons = function (name, address, sex) {
  this.name = name;
  this.address = address;
  this.sex = sex;
};

const CarsModels = function (model, year, color, owner) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.owner = owner;
};

const Ana = new Persons('Ana Montreal', 'Londres', 'F');
const car1 = new CarsModels('P1', 2001, 'Red', Ana);
console.log(car1);
console.log(car1.owner);

// Class expressions
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Method will be to added to .prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCl('Jessica', 1989);
// console.log(jessica);
jessica.calcAge();

// 1. Classes are NOT hoisted
// 2. Classes are first-classes citizes
// 3. Classes are executed in strict mode
