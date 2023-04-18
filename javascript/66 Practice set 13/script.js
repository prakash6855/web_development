//Question:--- Create a program to load js file in the browser using promises. Use .then() to display an alert when the load is complete.
/*

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
     alert("Loading completed")
        resolve(1);
    }, 300);
})

p1.then((value)=>{
    console.log(value);
})

*/

// Question:--- Write the above same program using async/await syntax.

/*
async function code() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 300);
    });

    let p2 = await p1;
    return p2; // return the resolved value of p1
}

const code1 = async () => {
    console.log("Data transferred");
    let a = await code();
    console.log("Fetched data: ", a); // log the value of p2
}

code1();

*/

// Question:---Create a promise which rejects after 3 seconds use an async/await to get its value.Use a try catch to handle its error.

/*

let a = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject(new Error("An error occured"));
        }, 2500);
    })
}

let b = async()=>{
    try{
let c = await a();
console.log(c);
    }catch(err){
console.log("Error handling done")
    }
}
b();

*/
// Question:---Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await these promises one by one

   /*

let p1 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(10)
            }, 1500)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(20)
            }, 2500)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(30)
            }, 3500)
    })
}

const runtime = async () => {
    console.time("runtime");
    // let a1 = await p1() // Fetch first 10 products from the database
    // let a2 = await p2() // Fetch another 10 products from the database
    // let a3 = await p3() // Fetch yet another 10 products from the database


    let a1 = p1() // Fetch first 10 products from the database
    let a2 = p2() // Fetch another 10 products from the database
    let a3 = p3() // Fetch yet another 10 products from the database
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3);
    // console.log(a1, a2, a3)
    console.timeEnd("runtime");
}

runtime();

*/