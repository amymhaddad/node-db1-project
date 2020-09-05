
//Create instance of knex library. This returns a function, which I pass my configuration object.
const knex = require("knex");

//Create path to knex file that contains my configuration details
const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "development";

//The result is my knex instance 
module.exports = knex(knexfile[database]);
