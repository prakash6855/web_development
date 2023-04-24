// Create a js class to create a complex number. Create a constructor to set the real and complex part.

/*
class Complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
}
let a = new Complex(1, 2);
let b = new Complex(3, 4);
*/

// Write a method to add two complex number in the above class
/*
class complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
}

let a = new complex(1, 2);
let b = new complex(3,4);
a.add(b);
console.log(`(${a.real} + ${a.imaginary}i)`);
*/

//Create a class student from a class human. Override a method and see changes
/*
class human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        console.log(`${name}: is here`);
        console.log(`${name} lives at ${address}`)
    }
    eating() {
        console.log(`He/She can eat`);
    }
    sleep() {
        console.log(`He/She can sleep`);
    }
}
class student extends human {
    study() {
        console.log(`He/She can study`);
    }
}

let a = new student("Zara", "Chennai");
a.study();
*/

//See if student of an instance of human using instanceof keyword
/*
class human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        console.log(`${name}: is here`);
        console.log(`${name} lives at ${address}`)
    }
    eating() {
        console.log(`He/She can eat`);
    }
    sleep() {
        console.log(`He/She can sleep`);
    }
}
class student extends human {
    study() {
        console.log(`He/She can study`);
    }
}

let a = new student("Zara", "Chennai");
a.study();
console.log(a instanceof human);

*/
// Use getters and setters to set and get the real and imaginary part of a complex number

class complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newReal){
        this._real = newReal;
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
}

let a = new complex(1, 2);
console.log(a.real, a.imaginary);
a.real = 15;
a.imaginary = 15;
let b = new complex(3,4);
a.add(b);
console.log(`(${a.real} + ${a.imaginary}i)`);


