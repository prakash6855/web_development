class Bird{
    constructor(name){
this.name = Bird.capitalise(name);
    }
    fly(){
        console.log("Bird, "+ this.name + " is flying");
    }
    static capitalise(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}
let b = new Bird("Parrot");
b.fly();

