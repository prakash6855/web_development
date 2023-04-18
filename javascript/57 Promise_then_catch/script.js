let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is in pending state");
    setTimeout(() => {
        // console.log("I am promise and i am fulfilled");
        resolve(true);
    }, 3000);
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is in pending state");
    setTimeout(() => {
        // console.log("I am promise and i am rejected");
        reject(new Error("I am an error"))
    }, 3000);
})
// To get the value
p1.then((value)=>{
console.log(value);
})

// p2.then((value)=>{
//     console.log(value);
// })

//To catch the error we can use
/*
p2.catch((error)=>{
    console.log("Some error occured in p2")
})
*/
// We can use the bellow code also to get the value or to get an error
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
