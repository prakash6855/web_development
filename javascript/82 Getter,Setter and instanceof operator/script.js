class animal{
    constructor(name){
this._name = name;
    }
    fly(){
        console.log("Flying high over the ocean")
    }
    get name(){
        return this._name;
    }
    set name(newName){
this._name = newName;
    }
}

class wild extends animal{
    eatmeat(){
        console.log("Eat meat");
    }
}
let a = new wild("Eagle");
a.fly();
console.log(a.name);
a.name = "Chimpu";
console.log(a.name);
let c = 33;

// instanceof:-----The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 

console.log(a instanceof animal);
console.log(a instanceof wild);
console.log(c instanceof animal);


