// Question:----Write a JS program to print two words after 1.5 seconds delay
// const a = async (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 1500);
//     })
// }
// (
//     async () => {
//         let text = await a("Hello");
//         console.log(text);
//         text = await a("World!");
//         console.log(text);
//     }
// )()

//Question:---Write a program to find an average of numbers in an array using spread syntax.
// function sum (a, b, c){
//     return a+b+c;
// }
// let add = [1,2,3];
// console.log (sum(...add)/3);

//Question:---Write a js function which resolves a promise after n seconds.The function takes n as the parameter.Use an IIFE to execute a function with different values of n.

// const a = async (text, n = 2) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(text)
//       }, 1000 * n)
//     })
//   }
//   (async () => {
//         let text = await a("Hello");
//         console.log(text);
//         text = await a("World!");
//         console.log(text);
//     }
// )();
//   (async () => {
//     let text = await a("I am resolving after 1 second", 1)
//     console.log(text)
//     text = await a("I am resolving after 4 seconds", 4)
//     console.log(text);
//   }
//   )()

//Question:---Write a simple interest claculator using js
// function si(p, r, t){
//     return (p*r*t)/100;
// }
// console.log(si(1000,5,3));

  