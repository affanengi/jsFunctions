// Arrow Functions

// function sayBye(){
//     console.log("Bye");
// }

// sayBye();

// How to convert simple to arrow function
// 1.Remove function keyword and add let
// 2.add = sign after functio name
// 3.add => sign after ()
let fname = "Affan";
let date = "13th june";


let sayBye = () => {

console.log("Bye Affan!");
console.log(`Bye ${fname}! meet you on ${date}`);

}
sayBye();

// Simple functions support Hoisting
// Arrow functions doesn't support Hoisting