/*
let a = prompt("Enter your age");
a = Number.parseInt(a); // Converting a string to a number
// console.log(typeof a); //typeof operator is used to check the data type
// alert("Be carefull");
if (a>0){
    alert("This is a valid age for taking solid food")
} else{
  alert("Your entry is out of the limits")
}
*/


// Driving licence distribution by the government

let a = prompt("Enter your age for registration");
a = Number.parseInt(a);
if(a < 0){
    alert("Enter valid age")
}
else if (a < 16){
    alert("You are a kid now wait for some years")
}
else if(a >= 16 && a < 18){
    alert("You can drive e-scooty only")
}
else{
    alert("You can drive")
}