// Write a js program to find whether a number is divisible by 2 and 3

/*

let num = prompt("Enter any number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("The number is divisible by 2 and 3");
}else{
    console.log("It is not divisible by 2 or 3");
}

*/



//Write a js program to find whether a number is divisible by 2 or 3

/*
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num % 2 == 0 || num % 3 == 0){
    console.log("The number is divisible by either 2 or 3");
} else{
    console.log("The given number is nit divisible by 2 or 3");
}
*/

// Distribution of driving licence decided by the government is for those whose age is greater or equals to 18 using ternary operator.

let age = prompt("Enter your age");
age = Number.parseInt(age);
    console.log("You are", age>=18 ? "eligible for driving" : "ineligible for driving");
