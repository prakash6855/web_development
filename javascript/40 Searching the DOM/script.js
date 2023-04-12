//Change the color of card title
// let ctitle = document.getElementsByClassName("card-title")[0];//To search element by using class name
let ctitle = document.getElementById("firstcardtitle");//To search the element by using id
ctitle.style.color = "green";
let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "yellow";
ctitles[1].style.color = "cyan";
ctitles[2].style.color = "gray";
console.log(ctitles);
document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "orange";
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"))