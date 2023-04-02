const sum = (p, q)=>{
    return p + q;
}

console.log(sum(9, 16));




//Substract two numbers using arrow function

const diff = (p, q)=>
{
return (p - q); 
}
console.log("The difference between the two nos is ", diff(9, 19));



// Arrow function
const hello = ()=>{
    return "Hurray we won the trophy";
}
let w = hello();
console.log(w);


// Check the greatest number using arrow function

const greaternum = (a,b)=>{
    if(a>b){
        console.log("a is greater than b");
    }else if(a<b){
    console.log("a is less than b");
    }
    else{
        console.log("a is equal to b");
    }
}
let p = 20;
let q = 10;
greaternum(p, q);