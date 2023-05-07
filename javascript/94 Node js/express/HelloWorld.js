const express = require('express')
const app = express()
const port = 3001
app.get('/', (req, res) => {
    console.log("hey prakash you are giving me a hit ")
    res.send('You are at root!')
})
app.get('/about', (req, res) => {
    console.log(req.query.name);
    const clientName = req.query.name;
    switch(clientName){
        case "vikas": res.send("You are Vikas");
        break;
        case "prakash": res.send("You are Prakash");
        break;
        default:res.send("I don't know you man");
        break;
    }
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})