// map() :------------The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let array = [1, 3, 5, 7, 9, 11];
let a = array.map((value, index, array) =>{
  // console.log(value, index, array);
  return value * value;
})
console.log(a);

// filter():------The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
let arr = [21, 13, 44, 65, 86, 97, 28, 79, 89];
let res = arr.filter((element) =>{
  return element < 50;
})
console.log(res);      

// reduce():----The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

let arr1 = [1, 1, 3];
let arr2 = arr1.reduce((element1, element2)=>{
  return element1 + element2;
})

console.log(arr2);