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
E.logout();
E.requestLeave(4);