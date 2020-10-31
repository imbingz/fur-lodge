//Import keys.js for config
const key = require("../key.js");

//Export config
module.exports = {
    development: {
        username: key.username,
        password: key.password,
        database: key.database,
        host: key.host,
        port: "3307",
        dialect: "mysql"
         
    },
    // test: {
    //     username: key.username,
    //     password: key.password,
    //     database: key.database,
    //     host: key.host,
    //     port: "3307",
    //     dialect: "mysql"
    // },
    production: {
        // eslint-disable-next-line camelcase
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    }
};