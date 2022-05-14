const express = require('express'); //imports the library
const bodyParser = require('body-parser'); //body parser is called middleware (special to call request from a client)
const port = 3000; // defining which port is gonna be used
const app = express(); //Use the library. We call the library. Creates and express a application
// We are buildin an API // Building our own server on a computer. 

app.use(bodyParser.json()); // use the middleware (cal it before anything else happens on each request)

app.listen(port, ()=>{   // We are listening to an incoming request
    console.log("listening on port: "+port);
}); //listen ///we are using a non standard port (not 443-secur or 80-nonsecure)//any port greater than a 1000 is pos
// 
app.get('/',(request,response)=>{
    response.send("Hello Manoel Galvao")
}); //respond


app.post('/login', (request, response)=>{ // a post request is used by a cliente to send a new info to an API
    
    const requestHashedPassword = md5(request.body.password);
    const redisHahedPassword= await redisClient.hGet('password' , request.body.username);
    const loginRequest = request.body; // check the data was sent. Request has a lot of data inside.
    console.log("Request Body", JSON.stringify(request.body));
    // search database for username, and retrive current password

    // compare the hashed version of the password that was sent with the hashed version of the database
    if (loginRequest.userName=="27a464ab9f8e4ab3ebb72cf16cce4dd3" && loginRequest.password=="94a3aaca2b06d95271ec067ef91d7c1d"){ // 
        response.status(200); // 200 means OKay
        response.send("Welcome");
    } else{
        response.status(401); // 401 means Unauthorized
        response.send("Unauthorized");

    }

});



