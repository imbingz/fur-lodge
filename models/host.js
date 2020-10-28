//Import bcrypt package for password hashing (using bcryptjs version may cause errors on Windows machine sometimes)

const bcrypt = require("bcryptjs");

//Create Host Model and export the module

module.exports = (sequelize, DataTypes) => {
    //Create a Host model 
    const Host = sequelize.define("host", {
        //Set email attribute. check for valid email format and email cannot be null
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        //Password cannot be null 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
  
    //Create a custom method for Host Model. 
    // Check if the unhashed password entered by the host matches any hashed password stored in the database 
    Host.prototype.validPassword = function(password) {
        //bcrypt.compareSync() returns true or false 
        return bcrypt.compareSync(password, this.password);
    };
    
    //Hooks (also known as callbacks or lifecycle events), are functions which are called before and after calls in sequelize are executed. They run during varoiud phases of the Host Model lifecycle
    //Here before a host is created, hooks will automatically hash hosts password
    Host.addHook("beforeCreate", host => {
        host.password = bcrypt.hashSync(host.password, bcrypt.genSaltSync(10), null);
    });
    
    //after hashing password, return Host Model
    return Host;
  
};
