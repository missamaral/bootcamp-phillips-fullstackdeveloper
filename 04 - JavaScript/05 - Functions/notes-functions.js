//note: the keyword return interrupts the execution of the function

//anonymous function
const sum = function (a,b) {
	return a+b;
}

//IIFE - Immediately Invoked Function Expression

//example 1
(
   function( ) {
	let name = "Digital Innovation One"
	return name;
   }
)( );

//example 2
(
   function (a, b) {
	return a+b;
   }
)( 1, 2);

//IIFE stored in a variable

const sum3 = (
   function (a, b) {
	return a+b;
   }
)( 1, 2);

//callback: a function called as an argument by another function

const calc = function(operation, num1, num2) {
   return operation(num1, num2);
}

const sum = function(num1, num2) {
   return num1 + num2;
}

const subtraction = function(num1, num2) {
   return num1 - num2;
}

const resultSum = calc(sum, 1, 2);
const resultSub = calc(subtraction, 1, 2);

console.log(resultSub); // -1
console.log(resultSum); // 3

// arguments object

function findMax() {
   let max = -Infinity;

   for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
         max = arguments[i];
      }
   }

   return max;
}

function showArgs() {
   return arguments;
}

//arrays: spread (...) - what was part of an array becomes an independent element

function sum (x,y,z) {
   return x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

//arrays: rest (...) - what were independent elements become an array to be used as arguments called by a function

function checkSize(...args) {
   console.log(args.length)
}

checkSize() //0
checkSize(1,2) //2
checkSize(3,4,5) //3

//object destructuring

const user = {
   id: 42,
   displayName: 'jdoe',
   fullName: {
      firstName: 'John',
      lastName: 'Doe',
   }
};

function userId({id}) {
   return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
   return `${first} ${last}`;
}

userId(user) //42

getFullName(user) //John Doe

//if/else 

function positiveNumber(num) {
   let result;

   if(num <0) {
      result = false;
   } else {
      result = true;
   }

   return result;

}

positiveNumber(2) //true
positiveNumber(-9) //false

function positiveNumber(num) {
   const isNegative = num < 0;
   const greaterThanTen = num > 10;

   if(isNegative) {
      return "This number is negative";
   } else if (!isNegative && greaterThanTen) {
      return "This number is positive and greater than ten"
   }

   return "This number is positive"
}

// switch/case (works like a === comparison)

function getAnimal(id) {
   switch(id) {
      case 1:
         return "dog";
      case 2:
         return "cat";
      case 3:
         return "bird";
      default:
         return "fish";
   }
}

// for - looping over iterable elements

function multiplyByTwo(arr) {
   let multiplied = [];

   for(let i = 0; i < arr.length; i++) {
      multiplied.push(arr[i] * 2);
   }

   return multiplied;
}

const myNumbers = [2, 33, 456, 356, 40];
multiplyByTwo(myNumbers); // [4, 66, 912, 712, 80]

// for in - looping over enumerable properties of an object

function forInExample(object) {
   for(prop in object) {
      console.log(prop);
   }
}

const myObject = {
   name: 'John',
   age: '20',
   city: 'Seattle'
}

forInExample(myObject); //name, age, city

function forInExample(object) {
   for(prop in object) {
      console.log(obj[prop]);
   }
}

const myObject = {
   name: 'John',
   age: '20',
   city: 'Seattle'
}

forInExample(myObject); //John, 20, Seattle

//for of - looping over iterable objects (array, string, map, set)

function logLetters(word) {
   for(letter of word) {
      console.log(letter);
   }
}

const word = "abacaxi";

logLetters(word)

// while

function exampleWhile () {
   let num = 0

   while (num <= 5) {
      console.log(num);
      num++;
   }
}

// do while

function exampleDoWhile () {
   let num = 0;

   do {
      console.log(num);
      num++;
   } while (num <= 5)
}

//this - a context reference

const person = {
   firstName: "Gustavo",
   lastName: "Camarini",
   id: 1,
   fullName: function() {
      return this.firstName + " " + this.lastName;
   }
   getId: function() {
      return this.id;
   }
};

person.fullName(); // "Gustavo Camarini"
person.getId(); //1

// calling this

const person = {
   name: 'Francisca',
};

const pet = {
   name: 'Tita',
};

function getName() {
   console.log(this.name);
}

getName.call(person); // Francisca
getName.call(pet); // Tita

const myObj = {
   num1: 2,
   num2: 4,
};

function sum(a,b) {
   console.log(this.num1 + this.num2 + a + b);
}

sum.call(myObj, 1, 5); //12

// applying this

const person = {
   name: 'Francisca',
};

const pet = {
   name: 'Tita',
};

function getName() {
   console.log(this.name);
}

getName.apply(person); // Francisca
getName.apply(pet); // Tita

const myObj = {
   num1: 2,
   num2: 4,
};

function sum(a,b) {
   console.log(this.num1 + this.num2 + a + b);
}

sum.apply(myObj, [1, 5]); //12

// binding this - clones a functions's structure and applies the value set as a parameter

const returnNames = function ( ) {
   return this.name;
};

let bruno = returnNames.bind({name: 'Bruno'});

bruno( ); // Bruno

// arrow functions

const helloWorld = ( ) => "Hello World"; // no need for curly brackets and the keyword return when there is only one line in your arrow function

const sum = a => a; //no need for brackets when there is only one parameter