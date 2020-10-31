//Import keys.js for config
const key = require("../key.js");

//Export config
module.exports = {
    development: {
        username: "root",
        password: "TiUP&c4tY2",
        database: "furlodge_db",
        host: key.host,
        port: key.port,
        dialect: "mysql"
         
    },

    test: {
        username: key.username,
        password: key.password,
        database: key.database,
        host: key.host,
        port: key.port,
        // port: "3307",
        dialect: "mysql"
    },
    production: {
        // eslint-disable-next-line camelcase
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    }
};