const hello = ()=>{
    console.log("Hello Prakash")
}
const ahello = (name)=>{
    console.log("Hello "+ name);
}
module.exports = {hello, ahello};// Same as bellow line
// module.exports = {hello: hello, ahello: ahello};
