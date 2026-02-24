//Whenever JavaScript runs code, it does not execute it line by line blindly. It creates something called an Execution Context.
// A structured environment where JS evaluates and runs your code.

// There are three types of execution contexts in JavaScript:
// 1. Global execution context.
// 2. Function execution context.Function
// 3. Eval execution context.

// let a;
// console.log(a);
// a=10;
// console.log(a);


// Example
// var x = 10;
// function foo() {
//   var y = 20;
//   console.log(x);
// }
// foo();

// In memory creation phase 
// x is created and assigned undefined
// foo is created and assigned the function itself

// In execution phase 
// x is assigned the value 10
// for function foo there is another function execution context is created and 
// y is assigned as undefined then assigned as value 20 in execution phase

// console.log(a);

// let a = 5;

// function test() {
//   console.log(b);
//   let a = 10;
// }
// test();



// Example 2
let a = 10;

function test() {
  console.log(a);
}

function wrapper() {
  let a = 20;
  test();
}

wrapper();