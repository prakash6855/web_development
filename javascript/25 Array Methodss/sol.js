
// Delete operator:-  The delete operator removes a property from an object. If the property's value is an object and there are no more references to the object, the object held by that property is eventually released automatically.

let no = [1, 2, 3, 4, 5];
console.log(no.length);
delete no[0];
console.log(no, no.length);// In this line we can see the the total no of items are 5 instead of 4 so the length remains the same.


// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let no1 = [11, 12, 13, 14, 15];
let newarr = no.concat(no1);
console.log(newarr);

let newarray = no.concat(no1);
console.log(newarray);
console.log(no, no1);

// Sort:----- The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

let a = [11, 35, 454, 5656, 57, 459, 676, 6786, 454, 0]; //Code in the above line will execute not as per the ascending order but it will be grouped as per the the value written first like here it will start by 11, 35 and so on....
a.sort();
console.log(a);

// A function that defines the sort order. The return value should be a number whose positivity indicates the relative order of the two elements.
// Compare is the function used with sort Bellow in the ascending order

let compare = (p, q)=>{
  return p - q;
}
let b = [12, 143, 615, 38, 148, 59, 766];
b.sort(compare);
console.log(b);

// Compare is the function used with sort Bellow in the decending order

let compare1 = (s, t)=>{
  return t - s;
}
let g = [12, 143, 615, 38, 148, 59, 766];
g.sort(compare1);
console.log(g);



// Create a program in which the age of persons will be short depend upon their age basis
let fage = (a, b)=>{
  return a - b;
}
let age = [3, 1, 19, 44, 70, 23];
age.sort(fage);
console.log(age);


// The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. 

let compare2 = (u, v)=>{
  return v - u;
}
let t = [12, 143, 615, 38, 148, 59, 766];
t.sort(compare2);
t.reverse();
console.log(g);


// Splice :---The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

/*
let listofholidays = [1, 2, 4, 25, 26, 27, 19, 22, 14, 15];
listofholidays.splice(3, 4, 5, 6, 7, 8, 9);// In this line splice tell the compiler to remove the element at the given index, then the no of elements to be delete then the rest of the elements in the functions will gets printed.
console.log(listofholidays);
*/

let listofholidays = [1, 2, 4, 25, 26, 27, 19, 22, 14, 15];
let deletedValues = listofholidays.splice(3, 4, 5, 6, 7, 8, 9);
console.log(deletedValues);

// Slice :---- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 

let holidays = [2, 7, 9, 11, 15, 16, 18, 19, 24]
// let updatedholidays = holidays.slice(3);
let updatedholidays = holidays.slice(3, 7);
console.log(updatedholidays);