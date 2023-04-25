/*
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6055);
        }, 2500);
    })
}
let f = async () => {
    let b = await p();
    console.log(b);
    let c = await p();
    console.log(c);
    let d = await p();
    console.log(d);
}
f()
*/

// IIFE:----An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

let p = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6055)
        }, 2500);
    })
}

(async () => {
    let a = await p();
    console.log(a);
    let b = await p();
    console.log(b);
    let c = await p();
    console.log(c);
})()

