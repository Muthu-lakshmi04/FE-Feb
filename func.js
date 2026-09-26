// add 2 numbers - declared
function add() {
    let c = 10 + 20;
    console.log(c); // 30
}
// call function
add()

//find square of a number
function square() {
    let num = 2;
    let res = num * num;
    console.log(res); //4
}
square()

// write a function to find area and perimeter of a circle

// write a function to find simple intrest  -> ptr/100

// 1. w/o i/p and op 
function square() {
    let num = 10;
    let res = num * num;
    console.log(res);
}
square();
// 2. with i/p and without o/p
function square1(num) {
    let res = num * num;
    console.log(res);
}
square(4);
// 3. w/o i/p and with o/p 
function square2() {
    let num = 6;
 return  num * num;
}
    console.log(square2());
// 4. with i/p and o/p 
function square3(num) { 
     return num * num;
}
let res = square3(3)
    console.log(`The square of the number is ${res}`);

function square3(num) {
    return num * num;
}
let num = 7;
let res1 = square3(num)
 console.log(`The square of the ${num} is ${res1}`);

 // assignment
 // 4 types for finding area of rectangle