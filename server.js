const express = require('express'); //import the library
const bodyParser = require('body-parser'); //body parser is called middleware
const port = 3000; // defining which port is gonna be used
const app = express(); //Use the library. creates and express a application
// We are buildin an API // Building our own server on a computer. 

app.use(bodyParser.json()); // use the middleware (cal it befor anything else happens on each request)

app.listen(port, ()=>{
    console.log("listening on port: "+port);
}); //listen ///we are using a non standard port (not 443-secur or 80-nonsecure)//any port greater than a 1000 is pos


app.get('/',(request,response)=>{
    response.send("Hello Manoel Galvao")
}); //respond


app.post('/login', (request, response)=>{ // a post request is used by a cliente to send a new info to an API
    const loginRequest = request.body;
    if (loginRequest.userName=="aba@google.com" && loginRequest.password=="123456@Manoel"){
        response.status(200); // 200 means OKay
        response.send("Welcome");
    } else{
        response.status(401); // 401 means Unauthorized
        response.send("Unauthorized");
    }

});



