const changeBgRed = ()=>{
document.body.firstElementChild.style.background = "red"
}
let b = document.body;
console.log("first child of b is: ", b.firstChild);
console.log("first element child of b is: ", b.firstElementChild);
console.log(b.previousElementSibling);
console.log(b.nextElementSibling);
console.log(b.firstElementChild);
console.log(b.lastElementChild);