//functions are used to perform various operations on the data
//They  allow us to manipulate the data in a more efficient way

//functios are used always like 
//Declaration: functionName(arg1, arg2, ...)
//Call: functionName(arg1, arg2, ...)

function add(a, b) {
    console.log("Sum is", a + b);
}
//Function call
add(1, 2); 

//Functions with parameters
function addWithParams(a, b) {
    console.log("Sum is", a + b);
}
//Function call
let sum = addWithParams(3, 4);

function multiplyWithParams(a, b, c) {
    console.log("Product is", a * b * c);
}
//Function call
let product = multiplyWithParams(2, 3, 4);

let fname =  "Mohammad";
let age = 20;

function sayName(){
    console.log("My name is", "" + fname + ", my ae is", "" + age);
}
sayName();

