//jshint esversion:6
const express = require("express");
// const passport = require("passport");
const LocalStrategy = require("passport-local");
const expressSession = require("express-session");
const User = require("./models/userModel")
const bodyParser = require("body-parser");
const app = express();


//AppRoutes

const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");


//AppConfig
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CengoDB", {useNewUrlParser:true});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config
app.use(require('express-session')({
    secret:"bu bizim güvenlik cümlemizdir",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(3001, function(){

console.log("Server started on port 3000")

});

//RoutesUsing

app.use(indexRoutes);
app.use(adminRoutes)


