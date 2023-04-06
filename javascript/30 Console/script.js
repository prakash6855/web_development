// console:------The console object provides access to the browser's debugging console (e.g. the Web console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

// console.log():------- The console object can be accessed from any global object. Window on browsing scopes and WorkerGlobalScope as specific variants in workers via the property console. It's exposed as Window.console, and can be referenced as console
console.log("Jai hind");


// console.error():----The console.error() method outputs an error message to the Web console.
console.error("We found an error");

// console.assert():----The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
console.assert(2>3);// Will shown an error
console.assert(22>3);//Will not show any error

// console.clear();:----The console.clear() method clears the console if the console allows it.
console.clear();

// console.table():-----The console.table() method displays tabular data as a table.
obj = {a: 1, b: 2, c: 3}
console.table(obj);

//console.warn():---The console.warn() method outputs a warning message to the Web console.
console.warn("Stay alert");

//console.info():---- The console.info() method outputs an informational message to the Web console.
console.info("Important information");

//console.time():-----The console.time() method starts a timer you can use to track how long an operation takes.

console.time("a");
//console.timeEnd():--The console.timeEnd() stops a timer that was previously started by calling console.time().

console.timeEnd("a");