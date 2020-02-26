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

router.post("/admin", (req,res)=>{
    console.log(req.body.data);

    const title = req.body.data.blogTitle;
    const comsentence = req.body.data.comSentence;
    const comImage = req.body.data.comImage;
    const blog = req.body.data.blog;

    const newBlog = {title:title, comSentence:comsentence, comImage:comImage,blog:blog};

    blog.create(newBlog).then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    });

    



});

router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.post("/signin", (req,res)=>{

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req,res, function(){
                res.redirect("/admin")
            });
        }

    })


});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("/signup", (req,res)=>{
 User.register({username: req.body.username}, req.body.password, function(err,user){
     if(err){
         console.log(err);
         res.redirect("/signup");
     }else{
         passport.authenticate("local")(req,res,function(){
             res.redirect("/admin");
         });
     }
 });

});





module.exports=router;