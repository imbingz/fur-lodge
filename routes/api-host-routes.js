// const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
const db = require("../models");

module.exports = function (app) {

    // app.post("/api/host", (req, res) => {
    //     db.Host.create(req.body)
    //         .then(results => res.json(results))
    //         .catch(error => console.log(error));
    // });

    app.get("/api/host", (req,res) => {
        db.Host.findAll({
            include: [db.Booking]
        })
            .then(results => res.json(results))
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
            .then(() => res.redirect(307, "/api/login"))
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
        
    });
};