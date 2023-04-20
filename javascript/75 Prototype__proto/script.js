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