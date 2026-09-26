// Primitive 
// Number
// dynamically typed programming language
let a = 10;
console.log(typeof a, a); // 10

a = "PEARLY";
console.log(typeof a, a); // string PeARLY and (a , typeof a) also correct

//Javascript loosely typed
let b = 3.16
const pi = 3.14; console.log(typeof b, b)

// String - " " , ' ' , `  `
let str = "ankit"
console.log(str, typeof str)
// My name is Ankit aged around 10, pi value is 3.14
console.log("My name is " + str)
console.log("My name is" , str) // (,) takes extra one space\
console.log("My name is " + str + " aged around " + a + ", pi value is " + pi) 
// ES6 string literals `${variable name}`- new feature in Js - it is a Interview Question
console.log(`My name is ${str} aged around ${a}, pi value is ${pi}`)

// Boolean true or false
let isvalid = true;
console.log(typeof isvalid, isvalid)

// let isvalid = false;
// console.log(typeof isvalid, isvalid)
  
// Undefined 
//let name = "Abhi";
//console.log(name)

let name;
console.log(name)
// the below for number type example of Infinity this is MCQ Interview Questions
// let z = 10 / 0; // output - Infinity
// z = 0 / 10; // output - 0
// z = 0 / 0; // output - NaN
let z = -10 / 0; // output - -Infinity
console.log(z);

// null 
let payment = null;
console.log(payment); // null means Nothing

// bigint 
let g = 100n;
console.log(typeof g, g)

// Symbol declare in variable only x,y,z something
let x = Symbol("user"); // whenever u create a unique variable or unique identifier , then you can make use of Symbol property
console.log(x);
console.log(typeof x)

// Complex Datatypes
// Array - [1,2,3]
let arr = [1, 2, 3];
console.log(arr , arr[1])

// Object {key: value} key as name and value as Alice
let person = {
    name: "Alice",
    age: 30
};
console.log(person.name); // output: Alice
console.log(person.age); // output: 30
console.log(Object.keys(person)); // output: Alice
console.log(person)

// function
function add() {
    c = 3 + 3;
    console.log(c);
}
add()

