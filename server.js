const express = require('express'); //imports the library

const port = 3000; // defining which port is gonna be used
const app = express(); //Use the library. We call the library. Creates and express a application
const md5 = require('md5'); //importing a library
const bodyParser = require('body-parser'); //body parser is called middleware (special to call request from a client)
const {createClient} = require('redis');
const redisClient = createClient(
{
    socket:{
        port:6379,
        host:"127.0.0.1",
    },
}   
); //this creates a connection to redis database
// We are buildin an API // Building our own server on a computer. 

app.use(bodyParser.json()); // use the middleware (cal it before anything else happens on each request)

app.listen(port, async ()=>{     // We are listening to an incoming request
    await redisClient.connect() //creating a TCP socket with Redis. 
    console.log("listening on port: "+port);
}); //listen ///we are using a non standard port (not 443-secur or 80-nonsecure)//any port greater than a 1000 is pos //validate password function //const  validatePassword 

const validatePassword = async (request, response)=>{
    await redisClient.connect(); //creating a TCP socet with Redis
    const requestHashedPassword = md5(request.body.password); // get the password from the body and hash it
    const redisHahedPassword= await redisClient.hmGet('password', request.body.userName);
    const loginRequest = request.body;
    console.log("Request Body", JSON.stringify(request.body));
    // search database for username, and retrivve current pasword

    // compare the hashed version of the password  that was sent with the hashed version from the database
    if (requestHashedPassword==redisHahedPassword){
        response.status(200);//200 means OKay
        response.send("Welcome")
    } else{
        response.status(401); //401 means unauthorized
        response.send("Unauthoized");
    }

}
app.get('/',(request,response)=>{
    response.send("Hello Manoel Galvao")
}); //respond

app.post('/login', validatePassword);

const signup=(request, reponse)=>{
    //hmset (username, password);
    

}

app.post('/signup', signup);




