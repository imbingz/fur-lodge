// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", (req, res) => {
    // If the hosts already has an account send host to host-profile page
        if (req.user) {
            res.render("/profile");
        }
        res.render("index");
    });

    app.get("/signup", (req, res) => {
    // If the hosts already has an account send host to host-profile page
        if (req.user) {
            res.render("/profile");
        }
        res.render("signup");
    });

    app.get("/login", (req, res) => {
    // 	// If the hosts already has an account send them to the host-profile page
        if (req.user) {
            res.render("/profile");
        }
        res.render("login");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If the hosts who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/profile", isAuthenticated, (req, res) => {
        res.render("profile");
    });
};
