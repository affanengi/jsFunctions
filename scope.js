// scope.js
// There are 3 types of scoping in JavaScript

// 1. Block or Local Scope
// 2. Function Scope
// 3. Global Scope

// 1. Block Scope
// Block means only in braces
// example : {}

//                          var         let         const
// Inside of block          yes         yes         yes
// Oustide of block         yes         no          no


// Inside of block in var

// {
//     var x = 10;
//     var y = 20;
//     console.log(x);
//     console.log(y);
// }

// // Inside of block in let

// {
//     let x = 10;
//     let y = 20;
//     console.log(x);
//     console.log(y);
// }

// // Inside of block in const

// {
//     const x = 10;
//     const y = 20;
//     console.log(x);
//     console.log(y);
// }


// // Outside of block in var

// {
//     var x = 10;
//     var y = 20;

// }

// console.log(x);
// console.log(y);


// Outside of block in let

// {
//     let num1 = 10;
//     let num2 = 20;

// }

// console.log("let outside the " + num1);
// console.log(num2);


// Outside of block in const

// {
//     const a = 10;
//     const b = 20;

// }

// console.log(a);
// console.log(b);



// 2. function scope


//                          var             let             const
// Inside of function       yes             yes             yes
// Outside of function      no              no              no



// 


// function s1(){
//     let a1 = 10;
//     let b1 = 20;
//     console.log(a1, b1);
// }

// s1();

// function s1(){
//     const a1 = 10;
//     const b1 = 20;
//     console.log(a1, b1);
// }

// s1();



// function s1(){
//     const a1 = 10;
//     const b1 = 20;

// }

// console.log(a1, b1);

// s1();


// function s1(){
//     var a1 = 10;
//     var b1 = 20;

// }
// console.log(a1, b1);

// s1();


// function s1(){
//     let a1 = 10;
//     let b1 = 20;
    
// }
// console.log(a1, b1);

// s1();






// 3. Global Scope

let a = 10;
var b = 20;
const c = 30;

console.log(a,b,c);

{
    console.log(a,b,c);
}

function sum(){
    console.log(a+b+c);
}
sum();