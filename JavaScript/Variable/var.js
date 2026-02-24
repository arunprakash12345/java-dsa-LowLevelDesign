// Variable is named storage of data for the value 
// A binding between an identifier (name) and a value in a lexical environment.
// Variable = reference / binding and Value = actual data

// where are variables stored in JavaScript?
// there are two types of memory in JavaScript
// 1. Stack memory - used for storing primitive values (numbers, strings, booleans, null, undefined, symbol)
// 2. Heap memory - used for storing objects (arrays, functions, objects)

// Feature	       var	      let	   const
// Scope	       Function	  Block	   Block
// Hoisted	       Yes	      Yes	   Yes
// TDZ	           No	      Yes	   Yes
// Re-declare	   Yes	      No	   No
// Reassign	       Yes	      Yes	   No


// there are three types of variable in JavaScript
// 1. var
// 2. let
// 3. const




// var
var user; //undefined 
// this is now hoisted until unless it is initialized with a value. 
user ='John'; // this is called variable initialization.
console.log(user); // Output: John


//Let
// when this let is declared it is in temporal dead zone until it is initialized with a value.

console.log(b); // ReferenceError
let b = 20; // it gives error if we try to access the variable before it is intiazieled show us a reference error
// because it is in temporal dead zone until it is initialized with a value.

let user = 'John'; 
//  redeclaration for var is allowed, 
// but not for let. why because var is function scoped and let is block scoped. 
// var can be redeclared and updated, while let can only be updated but not redeclared within the same scope.
let age = 25;
let message = 'Hello';
// let message= 'Welcome'; this is not allowed because we cannot redeclare a variable with let keyword
console.log(message); // Output: Welcome


//const
// const is used to declare a variable that cannot be reassigned. and this exactly similar to let 
//only difference is that we cannot reassign a value to a variable declared with const keyword.
const pi = 3.14; // this is called variable initialization.
console.log(pi); // Output: 3.14
// pi = 3.14159; this will give us an error because we cannot reassign a value to a variable declared with const keyword.



// SUMMARY
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.
// Variables should be named in a way that allows us to easily understand what’s inside them.



//Interview Questions

// Q1
let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);
// for the above question the output is 20 10

// Q2
// let a = 10;
// {
//   var a = 20; // SyntaxError
// }
// this is not allowed because var is function scoped and let is block scoped.


//Q3
// print the number from 1 to 5 after 1000ms delay
for(var i=1;i<=5;i++)
{
    setTimeout(()=>{
        console.log(i);
    },1000);
}
// this actully prints like 6 6 6 6 6 because var is function scoped and it is hoisted to the top of the function it stores in same memroy location
// so after 1000ms when we print it it is already updated to 6.


// correct code
for(let i=1;i<=5;i++)
    {
        setTimeout(()=>{
            console.log(i);
        },1000);
    }


// Q5
// Why are let and const safer than var?
// let and const are safer because they are block-scoped, 
// which prevents accidental variable leakage outside intended scope. 
// They also prevent redeclaration within the same scope, reducing bugs in large codebases. 
// Additionally, the Temporal Dead Zone prevents access before initialization, helping catch errors early. 
// const further improves predictability by enforcing immutable bindings.