// Function expressions

// Normal function statement


// function sayHi(){
//     console.log("Hi");
// }
// sayHi();

// Function expression
function callFunction(sayBye){
    sayBye();
}

var sayBye = function(){
    console.log("Bye");
}

callFunction(sayBye);




//  Using both function statement and function expression in the same script

//Normal function statement
// function add(a,b){
//     return (a + b);
// }
// console.log(add(2,3));


//Expression

// var subtract = function(a,b){
//     return (a - b);
// }

// console.log(subtract(4,3));