let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 1");
        // reject(new Error("Error")); //Apply to <2>
    }, 5000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 2");
        // reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});

/*
p1.then(((value)=>{
    console.log(value);
}))

p2.then((value)=>{
    console.log(value);
})

p3.then((value)=>{
    console.log(value);
})
*/

// <1> Promise.all():------The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// // })

// <2> Promise.allSettled():----The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

// let promise_all = Promise.allSettled([p1, p2, p3]) // Even though the value of p1 gets rejected its stats is also shown as an array in the console that makes it different form Promise.all
// promise_all.then((value)=>{
//     console.log(value);
// })


//Promise.race():----The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
//  })

//  Promise.any():----The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

// let promise_all = Promise.any([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
//  })

//Promise.resolve():----The Promise.resolve() static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value

// let promise_all = Promise.resolve(100)
// promise_all.then((value)=>{
//     console.log(value);
//  })

// Promise.reject():----The Promise.reject() static method returns a Promise object that is rejected with a given reason.

// let promise_all = Promise.reject(new Error("An error occured"))
// promise_all.then((value)=>{
//     console.log(value);
//  })