let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved in 3.5 seconds");
        resolve(20);
    }, 3500)
})

p1.then((value)=>{
  console.log(value);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve ("Promise 2")
    }, 2000)             
  })
}).then((value)=>{
  console.log("About to finish")
  return 2;
}).then((value)=>{
  console.log("Over")
})