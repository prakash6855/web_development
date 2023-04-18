/*

try {
    // throw new Error("An error occured")
    console.log(peter);
    throw new ReferenceError("An error occured");
} catch (error) {
    console.log(error.name);
    //Error.prototype.name:----The name data property of Error.prototype is shared by all Error instances. It represents the name for the type of error. For Error.prototype.name, the initial value is "Error". Subclasses like TypeError and SyntaxError provide their own name properties.
    console.log(error.message);
    //Error: message:---The message data property of an Error instance is a human-readable description of the error.
    console.log(error.stack);
    // Error.prototype.stack:-----The non-standard stack property of an Error instance offers a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.
}

*/

try{
    let age = prompt("Enter your age");
    age =  Number.parseInt(age);
    if(age > 120){
        throw new ReferenceError("Practically human can not alive at this age")
    }

} catch(error){
console.log(error.name);
console.log(error.message);
console.log(error.stack);
}
console.log("Script is still running");