// Promise:-----The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let promise = new Promise(function(resolve, reject){
    alert("Hello");
    resolve(56)
  })
  
  console.log("Hiii!! there");
  setTimeout(function() {
    console.log("I will execute only after completing my time bound")
  }, 2500)
  
  console.log("Everyone is unique in this world");
  console.log(promise);