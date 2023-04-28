// Destructuring assignment:-----The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let arr = [1, 3, 5, 7, 9, 11];
// let [a, b, c, d, ...rest] = arr;
// console.log(a, b, c, d, ...rest);// rest will print all the remaining values
// let [, b, , , ...rest] = arr;
// console.log(b, ...rest);//It will print the values of b and the rest excluding a, c, d
let {a, b} = {a:3, b:7};
// console.log(a, b);


//Spread operator:----

let arr1 = [3, 5, 7]
let obj1 = {... arr1};
console.log(obj1); 


function sum(s1, s2, s3){
return s1+s2+s3;
}

console.log(sum(...arr1));

let obj2 = {
    name: "prakash",
    address: "patna",
    age: "30"
}

console.log({...obj2, name: "vikas", age: "25"})
console.log({name: "vikas", age: "25", ...obj2,})// It will print the obj2 without any change