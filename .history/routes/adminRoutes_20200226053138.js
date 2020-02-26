const express = require('express'),
user = require('../models/userModel')
      router = express.Router();


let adminActions = [
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
    res.render("./admin/admin.ejs")
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
 let newUser = new User();
});


module.exports=router;