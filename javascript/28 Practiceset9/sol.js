// Question:---Create an array of numbers and take input from the user to add numbers to this array

/*
let arrr = [12, 34, 664, 23, 567, 876, 32, 322];
let arr1 = prompt("Enter the value");
num = Number.parseInt(arr1);
arrr.push(arr1);
console.log(arrr);
*/

//Question:--- Keep adding numbers to the array in question 1 untill 0 is added to the Array

/*
let ar = [2, 5, 7, 8, 9, 3, 5, 7, 7, 3, 3, 1];
let a;
while(a != 0){
  a = prompt("Enter a number");
  no = Number.parseInt(a);
  ar.push(a);
}
console.log(ar);
*/

// Using do-while loop we can proceed as

/*
let aray = [2,4,8,12,8,99,33,778,344,88,4];
let a;
do {
   a = prompt("Enter the value");
num1 = Number.parseInt(a);
  aray.push(a);
}while (a != 0)
console.log(aray);
*/

//Question:--- Filter for number divisible by 10 from a given array

let array = [10, 15, 20, 25, 30, 40, 100];
let arr4 = array.filter((value) =>{
 return value % 10 == 0;
}); 
console.log(arr4);



//Question:--- Create an array of square of a given numbers 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = arr.map((value)=>{
  return value * value;
})
console.log(res);


//Question:--- Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)

let arra = [2, 5, 7, 9, 10];
let outcome = arra.reduce((x1, x2)=>{
  return x1 * x2;
});
console.log(outcome);
