let num = prompt("Enter the number");
num = Number.parseInt(num);
fact = 1;
for(let i = num; i >= 1; i--){
    fact = fact * i;
}
console.log(fact);