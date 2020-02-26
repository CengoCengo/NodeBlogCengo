const express = require('express'),
User = require('../models/userModel'),
passport = require("passport")
      router = express.Router();


const adminActions = [
{
    actionId:1,
    actionName: "changeHomeImage",
    displayName: "Change Home Image "

},
{
    actionId:2,
    actionName: "changeAboutImage",
    displayName: "Change About Image "

},
{
    actionId:3,
    actionName: "changeAboutTeext",
    displayName: "Change About Text "

},{
    actionId:4,
    actionName: "addNewBlog",
    displayName: "Add New Blog "

},{
    actionId:5,
    actionName: "listAllBlogs",
    displayName: "ListAllBlogs "

},
]

router.get("/admin", (req,res)=>{
    res.render("./admin/admin.ejs", { adminActions: adminActions})
});


router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.post("/signin", (req,res)=>{

});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("/signup", (req,res)=>{
 let newUser = new User({username: req.body.username});
 User.register(newUser, req.body.password, (err, user) =>{
     if(err){
         console.log(err);
         res.redirect("/signup");
     }
     passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
 });

});


module.exports=router;