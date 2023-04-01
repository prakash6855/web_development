// // Write a program to add first n natural numbers


let sum = 0;
let num = prompt("Enter the value of num");
num = Number.parseInt(num);
for(let i = 0; i < num; i++)
{
    sum += (i+1);
}
console.log("The value for first " + num + " natural number is " +sum);



// Write a program to add first n whole numbers

// let sum  = 0;
// let num = prompt("Enter the number");
// num = Number.parseInt(num);
// for(let i = 1; i <= num; i++)
//   {
//     sum += i;
//   }
// console.log("The sum of first " +num+ " whole number is " +sum);