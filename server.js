const express = require('express'); //import the library
const app = express() //Use the library
// We are buildin an API
// Building our own server on a computer. 
app.listen(3000, ()=>{console.log("listening...")}); //listen
///we are using a non standard port (not 443-secur or 80-nonsecure)
//any port greater than a 1000 is pos
app.get('/',(request,response)=>{response.send("Hello Manoel")}); //respond



