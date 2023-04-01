// The for...in loop iterates over the properties of an object. For each property, the code in the code block is executed.

let obj = {
    monika: 400,
    radhika: 300,
    shubhangi: 350,
    rithika: 402
}
for (let a in obj){
    console.log("The marks obtained by " + a + " are " + obj[a]);
}