const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');

router.get("/", (req,res)=>{
    res.render("main.ejs")
});

router.get("/video", (req,res)=>{
    res.render("video.ejs")
});

router.get("blog/showBlog", (req,res)=>{
   
   
   res.render("blog/showBlog.ejs")
   
   
    // Blog.find({},(err,foundBlogs)=>{
    //     if(err){
    //         console.log("Hata var koç!")
    //         console.log(err);
    //     }else{
    //         console.log("Bütün girdiler");
    //         console.log(foundBlogs);
    //         res.render("/blog/showBlog.ejs", {foundBlogs:foundBlogs});
    //     }

    // })
})


module.exports=router;