//Closures:----- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

/*
message = "Good morning";
function greet(){
    let message = "Suprabhatam";
    {
    let message =  "Namastey";
    console.log("Greet :" + " "+ message);
}
console.log(message);
}
greet()
*/

/*

message = "Good morning";
function greet() {
    let message = "Suprabhatam";
    // let message = "Namastey";
    console.log("Greet :" + " " + message);
    let call = function greet1() {
        console.log(message);
    }
    return call;
}
call = greet();
call();
*/


// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     name = "firefox"
//     return displayName;
//   }
//   let c = init();
//   c();

function returnFunc(){

    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        a = 100;
        y();
    }
   return x;
}
let a = returnFunc();
a();

