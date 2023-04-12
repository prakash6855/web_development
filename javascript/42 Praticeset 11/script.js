// Create a nav bar and change the color of its first element to red.

let input = document.getElementById("elem");
input.style.color="red";



//Create a table without tbody.Now use "view page source" button to check whether it has a tbody or not??

// No in view page source it will not present because it shows what you have written wherein the browser if we inspect it it will present in table


// Create an element with 3 children. Now change the color of first and the last element to green.

let parent = document.querySelector(".navclass");
console.log(parent);
console.log(parent.children);
parent.children[0].style.color ="green";
parent.children[4].style.color = "green";


// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"


//Write js code to change bg to all <li> tags to cyan.
// Array.from(document.getElementsByTagName("li")).forEach((element) =>{
//     element.style.background = "cyan";
//   })


  //Which of the following is used for the farthest ancesstor that matches a given css selector
//   1.Matches
//   2.Closest
//   3.Contains
//   4.NOTA
//Ans- NOTA 



     