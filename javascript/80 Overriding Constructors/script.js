class employee {
    constructor(name){
        this.name = name;
        console.log(`${name}:-Employee's constructor is here`)
    }
    login() {
        console.log(`Employee has logged in`)
    }
    logout() {
        console.log(`Employee has logged out`)
    }
    requestLeave(leaves) {
        console.log(`Employee has requested for ${leaves} leaves - Auto approved`)
    }
}
class manager extends employee {
    constructor(name){
        super(name);
        console.log(`${name}:-Our new manager`)
    }
    // constructor(...args){  // If there is no constructor in the child class, this is created automatically.
    //     super(...args)
    // }
    requestLeave(leaves) {
        super.requestLeave(10);
        console.log("One extra granted")
    }
}

let E = new manager("Prakash")
E.login();
E.logout();
E.requestLeave();
