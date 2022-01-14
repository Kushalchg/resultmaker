//database connection.
//const nedb = require('nedb')
 //get user input from form. 

        // const cls =document.getElementById("enter_class").value;
        // const section=document.getElementById("enter_section").value;
        // const subject=document.getElementById("enter_subject").value;
        // const term=document.getElementById("enter_term").value;


const Datastore= require('nedb');

const database= new Datastore({filename: 'database.db',autoload: true});

database.loadDatabase();

database.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  // Two documents were inserted in the database
  // newDocs is an array with these documents, augmented with their _id
});
console.log("server is running");

