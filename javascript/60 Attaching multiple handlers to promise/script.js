let p1 = new Promise((resolve, reject) => {
    // alert("Hey i am not resolved");
    setTimeout(() => {
        resolve(3.5)
    }, 3500)
})
p1.then(() => {
    console.log("Congratulations promise is resolved now");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000);
    })
}).then((value) => {console.log(value)})
p1.then(() => {
    console.log("Hurray!!")
})