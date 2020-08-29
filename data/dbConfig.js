
//Create instance of knex library. This returns a function, which I pass my configuration object.
const knex = require("knex");

//Create path to knex file that contains my configuration details
const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "development";

//The result is my knex instance 
module.exports = knex(knexfile[database]);
 

//Manually close connection 
// knex.destroy()

//this file takes in the knex configurations 
//This file sets up the interactions with the db and the knex object. JS can't talk to postgres -- so knex is the inbetween JS and db 


//to do:
//1
// Add a query string option to the GET /api/accounts endpoint. The query string may contain limit, sortby and sortdir keys. If these keys are provided, use these values to limit and sort the accounts which are selected from the database. Reference the docs for sorting and limiting in knexjs.org.
// // sample req.query object
// {
//   limit: 5,
//   sortby: 'id',
//   sortdir: 'desc'
// }

//2
// run queries using PostgreSQL instead of SQLite.
// install PostgreSQL.

//3
// use PostgreSQL instead of SQLite to power the API.

// open ./data/dbConfig.js and change the database constant to be "production".
// open ./knexfile.js and follow the instructions to configure the production property to use the correct credentials to connect to your postgres server.
// run the API and test using an HTTP client like Postman.
