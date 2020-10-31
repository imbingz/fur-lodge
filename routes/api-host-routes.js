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

    app.get("/api/host/:id", (req,res) => {
        db.Host.findAll({
            where: req.params.id,
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
            .then(() => res.redirect("/profile"))
            .catch((err) => {
                res.status(401).json(err);
            });
    });
};