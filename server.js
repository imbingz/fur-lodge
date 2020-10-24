//Import packages and modules
const express = require('express');
const session = require('express-session');

// const passport = require('./config/passport')
// const db = require('./models')

//Setup PORT
const PORT = process.env.PORT || 8080;

//Create express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Use Session to keep track of user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
