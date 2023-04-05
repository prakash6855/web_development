

//Question 1
// What will the following print on js
// Solution
console.log("har\"".length);
// It will show the value 4 as har(3) and \" (1) means total 4


//Question 2
// Explore the includes, starts and ends with functions of a string
// Solution


//Includes
let sentence = "Kalam sir was a great scientist";
let output = sentence.includes("Kalam");
console.log(output);

//Startswith

let shabd = "I have a computer";
let uttar = shabd.startsWith("we");
console.log(uttar);

//Endswith

let vakya = "We received the parcel";
let ans = vakya.endsWith("parcel");
console.log(ans);

// Question 3
// Write a program to convert a given string to lowercase

let string = "Nothing Is Simple In This World";
let result = string.toLowerCase(); // we can insert the string characters as per our choice even though the result remains the same
console.log(result);

// Question 4
// Extract the amount in the given string
// "My Mobile number is 9391111111"

let contactno = "My contact number is 9391111111";
let search = contactno.slice(21, 31);
console.log(search);
//Or we can do the above in this way
let search1 = contactno.slice("My contact number is ".length);
console.log(search1);
// Question 5
// Try to change the 4th character of any of the above string. Were you able to do it??

let string1 = "Nothing Is Simple In This World";
string[3] = "o";
console.log(string1);

// So the answer is NO,  although it will print the same string value as it is without any error because strings are immutable