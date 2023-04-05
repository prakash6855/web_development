let boardresult = [90, 100, 200, "pass", 300, 405, "fail", 205, "Absent"];

// To print the value of an array
console.log(boardresult[0]);
console.log(boardresult[1]);
console.log(boardresult[2]);
console.log(boardresult[3]);
console.log(boardresult[4]);
console.log(boardresult[5]);
console.log(boardresult[6]);
console.log(boardresult[7]);
console.log(boardresult[8]);

// To check the length of an array
console.log("The length of student in the class is", boardresult.length);

// Adding a value to an array
boardresult[9] = 308;

// Changing/Altering value to an array
boardresult[3] = 388;
console.log(boardresult);

// Checking the typeof an array using typeof operator

console.log(typeof boardresult);



//Question  Using for loop print the array values

let num = [91, 94, 98, 100, 90, 99]
for(let i = 0; i < num.length;  i++)
{
console.log(num[i]);
}