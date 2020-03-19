//jshint esversion:6
const express = require("express");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const expressseSession = require("express-session");
const User = require("./models/userModel");
const Blog = require('./models/blogModel');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const app = express();
const path = require('path')


//AppRoutes

const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");


//AppConfig
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CengoDB", {useNewUrlParser:true, useUnifiedTopology: true,{useMongoClient: true} });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'))

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


