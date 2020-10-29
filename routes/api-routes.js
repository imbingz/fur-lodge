const db = require("../models");

module.exports = function (app) {

    app.post("/host", async (req, res) => {
        console.log(req.body);
        const results = await db.Host.create(req.body);
        try {
            res.json(results);
        } catch (error) {
            console.log(error);
        }
    });
};