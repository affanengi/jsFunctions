//Redeclare vs Reassign
// var , let , const

//Declare
var fullname = "Raj"
fullname = "Raju" //updates the variable
console.log(fullname)

var a = 10;
var a = 20; //Redeclare
console.log(a)
a = 90; //Reassign
console.log(a)

//NOW check will it work in let!
// let b = 30;
// let b = 40;//Redeclare
// console.log(b). Does't works in let 

//Now check in const
const p = 30;
//const p = 40;//Redeclare does'nt work in const\\
console.log(p)
//p = 50;
//console.log(p) //Reassigning also doesn't works in const.


//                           var    let   const
//Reassign                   ✅      ✅    ❌
//Redeclare                  ✅      ❌   ❌