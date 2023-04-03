// Write a program to print the marks of a student in an object using for loop.


/*


let marks = {
   Hari: 98,
  Rohan: 70,
  Aakash: 7
}
for(let i=0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}


*/


// Write a program to print the marks of a student in an object using for in loop.
/*

let marks = {
    Hari: 98,
    Rohan: 70,
    Aakash: 7
  }
  for(let key in marks){
    console.log(key +":"+ (marks[key]));
  }

*/


/*

// Write a program to print try again untill the user enters a correct number

let cn = 8;
let i;
while( i != cn){
    console.log("Try again");
    i = prompt("Enter another number");
}
console.log("You guessed the number sucessfully");

*/


// Write a program to calculate mean of 5 numbers of your choice

const mean = (a, b, c, d, e) => {
    return (a+b+c+d+e)/5;
  }
  console.log(mean(1,2,3,4,5));