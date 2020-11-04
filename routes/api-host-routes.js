// const isAuthenticated = require("../config/middleware/isAuthenticated");
const isAuthenticated = require("../config/middleware/isAuthenticated");
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

    // PUT route for updating host profile
    app.put("/api/profile", isAuthenticated , (req, res) => {
        console.log(`/api/profile Req.Body: ${req.body}`);
        console.log(req.user.id);
        db.Host.update(
            req.body,
            {
                where: {
                    id: req.user.id
                }
            }).then((results) => {
            res.json(results);
        });
    });

    app.put("/api/host", (req, res) => {
        const hostId = req.body.host_id;
        delete req.body.host_id;
        console.log(`put request in api-host-routes.js -> /api/host Req.Body: ${JSON.stringify(req.body)}`);
        console.log("hostId:"+hostId);
        db.Host.update(
            req.body,
            {
                where: {
                    id: hostId
                }
            }).then((results) => {
            res.json(results);
        });
    });
    //Host signup route handler - ***** need to change res.redirect path later 
    // app.post("/api/result", (req, res) => {
    //     res.redirect(307, "/result");
    //     if (err) {throw err;}
    // });
};