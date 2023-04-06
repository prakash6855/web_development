// forEach():-------The forEach() method executes a provided function once for each array element.

let number = [2, 3, 4, 5, 6, 7, 8];
// for(let i = 0; i<number.length; i++){
//     console.log(number[i]);
// }
number.forEach((element) => {
  console.log(element * element);
})


// The Array.from():----Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

let name = "Bhagat Singh";
let arr = Array.from(name);
console.log(arr);

//The for...of:---- The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
for(let i of number){
  console.log(i);
}

// The for...in:----- The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
for (let i in number){
  console.log(i);
  // console.log(number[i]);  It will print the element of i
}