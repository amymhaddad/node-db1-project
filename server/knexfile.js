module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      //this path needs be where I run npm start -- the root dir. app.js (the high level file of project) 
      //this path is relative to package.json
      //ultiately getting claled from app.js which is called by apiRouter which calls my Modules

      //this file creates the connection to the DB
      filename: "./server/data/budget.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost", // if the server is not running on your computer provide the network address
      database: "the name of the database to use in the postgres server", // <-- update
      user: "a user that has access to the server and database", // <-- update
      password: "the password for the user", // <-- update
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};