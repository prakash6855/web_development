// Question:----Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);
if(age >= 18){
    alert("He can drive");
} else{
    alert("He can not drive");
}
*/

/*
let age = prompt("Enter your age");
age = Number.parseInt(age);

const candrive = (age)=>{
    return age>=18?true:false;
}
if(candrive(age)){
    alert("You can drive");
}else{
    alert("You can not drive");
}
*/

// Question:---In question 1 use confirm to ask user if he wants to see the prompt again.

/* 
let runagain = true;
const candrive = (age) => {
    return age >= 18 ? true : false;
}
while (runagain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if (candrive(age)) {
        alert("You can drive");
    } else {
        alert("You can not drive");
    }
    runagain = confirm("Do you want to play again");
}
*/


// Question:---In the previous question use console.error to log an error if the age entered is negative
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);

if(age >= 18){
  alert("Yes, you can drive");
}else if(age < 18 && age >= 0){
  alert("You are too young");
} else{
    console.error("Invalid age");
}
*/

/*
let runagain = true;
const candrive = (age) => {
    return age >= 18 ? true : false;
}
while (runagain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if (age < 0) {
        console.error("Age will never be negative.Try agein");
        break;
    }
    if (candrive(age)) {
        alert("You can drive");
    } else {
        alert("You can not drive");
    }
    runagain = confirm("Do you want to play again");
}
*/


//Question:----Write a program to change the url to google.com if user enters a number greater than 4

/*
let num = prompt("Enter a number");
num = Number.parseInt(num);

const guessednum = (num) => {
  return num > 4 ? true : false;
}
if (guessednum(num)){
  location.href = "https://www.google.com";
}else{
  console.log("Try again");
}
*/


// Change the background of the page to yellow or red or any color basec on user choice through prompt

let color = prompt("Enter color of your choice");
document.body.style.background = color;
