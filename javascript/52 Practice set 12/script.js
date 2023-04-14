//Question 1:--- Write a program to show different alerts when different buttons are used


/*
let a = function(e){
  alert("Hiii there!!");
}
first.addEventListener('click', a);

let b = function(e){
  alert("Hello how are you???");
}
second.addEventListener('click', b);

let c = function(e){
  alert("See you after");
}
third.addEventListener('click', c);
*/
// Or else refer Html sheet


//Question 2:---Create a website which is capable to store bookmarks of your favourite website using href


// For the solution of 2nd ques refer html page

//Question 3:---Repeat question 2 using eventlisteners
/*

document.getElementById("google").addEventListener('click', function(){
  window.location = "https://google.com";
})

document.getElementById("zomato").addEventListener('click', function(){
  window.location = "https://zomato.com";
})

document.getElementById("twitter").addEventListener('click', function(){
  window.location = "https://twitter.com";
})

*/

// Create a js to keep fetching contents of a website(every 5 sec)
/*

 const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json()
  return a;
}

setInterval(async function() {
  let url = "https://jsonplaceholder.typicode.com/todos/1"
  console.log(await fetchContent(url))
}, 3000)

*/

//Question 5:--Create a glowing bulb effect using classlist toggle method in js

setInterval(async function() {
    document.querySelector("#Bulb").classList.toggle("batti")
  }, 300)