/*
class employee{
   login(){
console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
            }
            requestLeave(leaves){
                console.log(`Employee has requested for ${leaves} leaves`)
            }
}
class manager extends employee{
requestLeave(x){
console.log(`Employee has requested for ${x+1} leaves (one bonus)`)
}
}

let E = new manager()
E.login();
E.logout();
E.requestLeave(4);
*/

// super:-----The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

class employee {
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
    requestLeave(leaves) {
        super.requestLeave(10);
        console.log("One extra granted")
    }
}

let E = new manager()
E.login();
E.logout();
E.requestLeave();

