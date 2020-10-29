//Import doteve package 
require("dotenv").config();

//Export the config as an object
module.exports = {
    development: {
        username: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "furlodge_db",
        host: "127.0.0.1",
        port: 3307, //TAKE OUT!
        dialect: "mysql"
    }, 
    development: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
        host: process.env.MYSQL_HOST,
        port: 3307,
        dialect: "mysql"
    }, 
    development: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
        host: process.env.MYSQL_HOST,
        port: 3307,
        dialect: "mysql"
    }
};
