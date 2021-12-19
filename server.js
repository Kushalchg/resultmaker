//database code
const Datastore= require('nedb');
const database= new Datastore('database.db');
database.loadDatabase();


//express to take user input from form.

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.listen(port,()=>{
    console.log("listening to the server at port 3000");
})






app.post('http://localhost:3000',function(request,response){
    console.log('I got a request');
    console.log(request.body);
});
