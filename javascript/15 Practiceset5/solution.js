//Using a logical operator find whether an age of a person is in between 10 to 20
let age = prompt("Enter your age");
age = Number.parseInt(age);
if(age > 10 && age < 20){
    console.log("you are in between 10 and 20 years of age");
}else{
    console.log("Invalid data");
}