// const sayHello = (name, greeting) => console.log(greeting +" "+ name);
// sayHello("Peter", "Namastey");

const sayHello = name => {
    console.log("greeting" +" "+ name);
    console.log("hii");
}
const x = {
    name: "Parker",
    job: "JS developer",
    exp: "2",
    show: function(){
        // let that = this;
        // console.log(this);
        setTimeout(()=> {
            console.log(`The name is ${this.name}\nThe role is ${this.job}`);
        }, 1500);
    }

}
