//Synchronous programming


/*
let a = prompt("What's your name?");
let b = prompt("what's your father's name?");
let c = prompt("what's your mother's name?");
console.log(a + " is " + " child of " + b + " and "+ c);
*/

// Asynchronous programming

/*
console.log("Program initiated");
setTimeout(function(){
console.log("Hiii there!!!")
}, 3000)
console.log("program ended");
*/

// Callback function
/*
function loadscript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: "+ src);
        callback(src);
    }
    document.body.appendChild(script);
} 

function Hiii(src){
    alert("hiiii" + src);
}

function Hello(src){
    alert("hello"+ src);
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", Hiii)

*/


// Handling errors

function loadscript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: "+ src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: "+ src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
} 

function Hiii(error, src){
    if (error){
        console.log(error)
        return
    }
    alert("hiiii" + src);
}


function Hello(error, src){
    if (error){
        console.log(error)
        return
    }
    alert("hello" + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", Hello)




