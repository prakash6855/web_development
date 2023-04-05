// To convert an array to the string

let number = [2, 3, 4, 6, 7, 10];
let result = number.toString(number);
console.log(result, typeof result);

// To join an array
let result1 = number.join("_");
console.log(result1);

// The pop() method removes (pops) the last element of an array.

// The pop() method changes the original array.

// The pop() method returns the removed element.

let rem = number.pop();
console.log(number, rem);

// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.

let inject = number.push(100);
console.log(number);

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

let hata = number.shift();
console.log(hata, number);

// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
// returns a new array length

let mov = number.unshift(88);
console.log(mov, number);

//