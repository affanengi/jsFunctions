//Set timeout
//Executes a function once after a delayed time in milliseconds.

//1000 ==> 1 second
//2000 ==> 2 second
//5000 ==> 5 second

function sayGlobal (){
    console.log("Hello Global")
}
// it takes 2 parameters
// 1st function
// 2nd function in milliseconds
let seconds = 5
//setTimeout(sayGlobal,seconds * 1000)

setInterval(sayGlobal, 1000)