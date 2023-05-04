/*
Local scope:--------------Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).
{
    let a = 10;
}   
console.log(a);
*/ // The above code will throw an error as the value declared here is only scoped for the local value and it should be not use globally ad a is not available here


/*
Function scope:---It also act as local scope
function pq(){
    let p = 1;
    console.log(p);
}
pq();
console.log(p);
*/

/*
Global scope:---In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes.In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.
 */

let b = 100;
function bc(){
    let z = 9;
    console.log(b);
    console.log(z);
}
bc();
console.log(b);
console.log(z);