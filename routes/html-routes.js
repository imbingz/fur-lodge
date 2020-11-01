// Requiring our custom middleware for checking if a user is logged in
// eslint-disable-next-line no-unused-vars
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
    // Landing Page - Search Form 
    app.get("/", (req, res) => {
    // If the hosts already has an account send host to host-profile page
        if (req.user) {
            res.render("profile");
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
                console.log("datavalues",results.dataValues);
                res.render("profile", {host: results.dataValues});
            })
            .catch(error => console.log(error));
    });

    // Render Search Result Page
    app.get("/result", (req,res) => {
        // req.body.available = true;
        console.log(`Request Body: ${req.body}`);
        db.Host.findAll({
            attributes: ["first_name", "last_name", "email", "phone", "city","bio"],
            where: req.body
        })
            .then(results => {
                console.log(`Query Results: ${results}`);
                res.render("result",{data: results});
            })
            .catch(error => console.log(error));
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
