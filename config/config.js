//Import keys.js for config
const key = require("../key.js");
console.log(key);

//Export config
module.exports = {
    development: {
        username: "root",
        password: "password",
        database: "furlodge_db",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "furlodge_db",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        // eslint-disable-next-line camelcase
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    }
};