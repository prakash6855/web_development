// NN BB SS U WHERE N= NULL, N=NUMBER, B=BOOLEAN, B= BIGINT, S=STRING, S=SYMBOL, U=UNDEFINED   (These are primitive data types)

let a = null;
let b = 123;
let c = true;
let d = BigInt("10000");
let e = "Rohan";
let f = Symbol("$$$$%%%%");
let g = undefined;// if we dont provide the value of g here it will show undefined value of g by default
console.log(a, b, c, d, e, f, g);
console.log(typeof b);// typeof is used to check the type of variable