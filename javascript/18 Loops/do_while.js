let num = prompt("enter the value of n");
num = Number.parseInt(num);
let i = 1;
do{                // It will execute for the first time, for sure no matter what, then condition is checked
    console.log(i);
    i++;
}
while(i <= num) // Here condition is checked for the 2nd time, if the condition is true then execute else not