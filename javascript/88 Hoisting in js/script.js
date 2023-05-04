
// The two lines mentioned bellow will run seccessfully due to JS hosting
console.log(a);
greet();
function greet(){
    console.log("Namastey India");
}
var a = 1000; // Declaration hoisted to the top but initialiazation is not. 
// If we use var instead of let or const then hoisting will be done and we can use the variable, but if we use let or const then hoisting will not be done and we  can not use the value
// let a = 1000;
// const a = 1000;
console.log(a);



/*

console.log(a);
greet();
var greet = function()  { // Functions expression and class expressions are not hoisted
    console.log("Namastey India");
}
var a = 1000;
console.log(a);
*/
