// Requiring our custom middleware for checking if a user is logged in
// eslint-disable-next-line no-unused-vars
/* eslint-disable camelcase */
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const { Op } = require("sequelize");

module.exports = function(app) {
    // Landing Page - Search Form 
    app.get("/", (req, res) => {
    // If the hosts already has an account send host to host-profile page
        if (req.user) {
            req.logout();
            res.render("index");
        }
        res.render("index");
    });

    //Signup Form 
    app.get("/signup", (req, res) => {
        if (req.user) {
            res.render("profile");
        }
        res.render("signup");
    });

    //Login Form
    app.get("/login", (req, res) => {
        if (req.user) {
            res.render("profile");
        }
        res.render("login");
    });

    // Edit Host Profile Form
    app.get("/account", (req, res) => {
        if (req.user) {
            res.render("account");
        }
        res.render("index");
    });

    //Render Host Profile Page
    app.get("/profile", isAuthenticated, (req,res) => {
        console.log(req.user);
        db.Host.findOne({
            where: {
                id: req.user.id
            },
            attributes: [
                "first_name", 
                "last_name", 
                "email", 
                "phone", 
                "city",
                "bio",
                "is_pup",
                "is_cat",
                "rate",
                "short_term",
                "long_term",
                "pet_amt",
                "small",
                "med",
                "large",
                "giant",
                "available"
            ],
            include: [db.Booking]
        })
            .then((results) => {
                console.log("/profile results.dataValues",results.dataValues);
                res.render("profile", {host: results.dataValues});
            })
            .catch(error => console.log(error));
    });

    // Render Search Result Page
    app.get("/result", (req,res) => {

       // console.log("inside get/result ==> req.query", req.query);

        const {city, is_pup, is_cat, short_term, long_term, pet_amt, small, med, large, giant} = req.query;

        db.Host.findAll({
            attributes: ["id","first_name", "last_name", "email", "phone", "city","bio"],
            where: {
                is_pup: is_pup ? Boolean(Number("1")) : Boolean(Number("0")),
                is_cat: is_cat ? Boolean(Number("1")) : Boolean(Number("0")),
                short_term:short_term ? Boolean(Number("1")) : Boolean(Number("0")), 
                long_term:long_term ? Boolean(Number("1")) : Boolean(Number("0")), 
                pet_amt:pet_amt ? Boolean(Number("1")) : Boolean(Number("0")), 
                small:small ? Boolean(Number("1")) : Boolean(Number("0")), 
                med:med ? Boolean(Number("1")) : Boolean(Number("0")), 
                large:large ? Boolean(Number("1")) : Boolean(Number("0")), 
                giant:giant ? Boolean(Number("1")) : Boolean(Number("0")),
                available: true,
                city: {
                    [Op.like]: `%${city}%`
                }
            }
        })
            .then(results => {

                // console.log("inside get/result ==> result[0]", results[0]);

                res.render("result",{data: results});
            })
            .catch(error => console.log(error));
    });

    // Route for logging host out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If the hosts who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/profile", isAuthenticated, (req, res) => {
    //     res.render("profile");
    // });

    // ***** use this without isAuthenticated middleware temporarily
    // app.get("/profile", (req, res) => {
    //     res.render("profile");
    // });

};
