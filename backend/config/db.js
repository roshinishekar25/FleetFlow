const { Pool } = require("pg");

const pool = new Pool({

    user: "postgres",

    host: "localhost",

    database: "FleetFlow",

    password: "rosh0707",

    port: 5432
});

module.exports = pool;