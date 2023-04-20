//Use a free API from the internet and feed your app with live data

let url = "https://api.citybik.es/v2/"
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((bikes) => {
    console.log(bikes);
    for (item in bikes){
        console.log(bikes[item]);
    }
})







// Create a note saving app which stores your note in local storage
// let a = prompt("Enter your note/article to purchase");
// let b = prompt("Enter the quantity to buy")
// localStorage.setItem(a, b);
// console.log(`Your note/articl is ${a} and its quantity is ${b}`)

//Repeat the last question and fetch the note which was saved

// localStorage.getItem(a, b);
// console.log(`Your note/articl is ${a} and its quantity is {b}`);

// //Delete the note in the previoue question
// localStorage.removeItem(a);
// console.log(`Your note/article is now ${a} and its quantity is ${b} `)