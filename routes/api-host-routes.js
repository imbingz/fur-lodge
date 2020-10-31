const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
const db = require("../models");

module.exports = function (app) {

    app.post("/api/host", (req, res) => {
        db.Host.create(req.body)
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });

    app.get("/api/host", (req,res) => {
        db.Host.findAll({
            include: [db.Booking]
        })
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });

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
                console.log(results);
                res.render("profile", {name: results.first_name});
            })
            .catch(error => console.log(error));
    });

    app.post("/api/host/search", (req,res) => {
        req.body.available = true;
        console.log(req.body);
        db.Host.findAll({
            attributes: ["first_name", "last_name", "email", "phone", "city","bio"],
            where: req.body
        })
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });

    //Host signup route handler - ***** need to change res.redirect path later 
    app.post("/api/signup", (req, res) => {
        db.Host.create(req.body)
            .then(() => res.redirect(307, "/api/signin"))
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    app.post("/api/signin", passport.authenticate("local"), (req, res) => {
        console.log("requser:", req.user);
        res.json(req.user);
        
    });
};