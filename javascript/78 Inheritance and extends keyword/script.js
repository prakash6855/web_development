class singer {
    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    singing() {
        console.log(`${this.name} is Singing`);
    }
    compose() {
        console.log(`${this.name} is composing music`);
    }
}
class musicdirector extends singer {
    teaching() {
        console.log(`${this.name} is teaching`);
    }
    acting(){
        console.log(`${this.name} is acting sometimes`)
    }
}
let sin = new singer("Sonu", "singer");
let md = new musicdirector("Himesh", "musicdirector")

sin.singing();
md.teaching();
md.acting();
// sin.acting();// It will throw an error as function in the parent class is unavailable