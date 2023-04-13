// alert("hello");
/*
document.write("Namastey");
let a = setTimeout(function(){
    alert("Content is inside of timeout")
}, 3000)  //Here 3000 is time represent in miliseconds
let b = prompt("Do you really want to run the timeout??")
if("n" == b){ // Conditional operator n = "no"
    clearTimeout(a);
}
*/
// clearTimeout(a);
//clearTimeout():----The global clearTimeout() method cancels a timeout previously established by calling setTimeout(). 

// console.log(a);
//Output:---2 which represent timer id

//setTimeout() global function:-----The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. 
const sum = (a,b) =>{
    console.log("Yes i am running" + " " +(a+b));
}
setTimeout(sum, 1000, 1,2);

//setInterval() global function:-----The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. 

setInterval(function()  {
    alert("SetInterval")
}, 1900);
