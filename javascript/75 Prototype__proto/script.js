// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
let a = {
    name: "peter",
religion: "christian",
run: ()=>{
    alert("Hey")
        }
}
console.log(a);

let r = {
    run: ()=>{
alert("Hello G")
    }
}

r.__proto__ = {
    naam: "Pablo"
}

a.__proto__ = r;
a.run();
console.log(r.naam);