const db = require("../models");

module.exports = function (app) {

    app.post("/booking", (req, res) => {
        //********* Delete later 
        console.log("inside post/booking req.body: ", req.body);
        
        db.Booking.create(req.body)
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });

    app.put("/booking", (req,res) => {
        console.log("hit api-booking-routes -> put /booking ");
        db.Booking.update(req.body)
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });

    app.get("/booking", (req,res) => {
        db.Booking.findAll({
            include: [db.Host]
        })
            .then(results => res.json(results))
            .catch(error => console.log(error));
    });
};