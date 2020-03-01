const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("main.ejs")
});

router.get("/video", (req,res)=>{
    res.render("video.ejs")
});

router.get("/blog/showBlog", (req,rees)=>{
    Blog.find({},(err,foundBlogs)=>{
        if(err){
            console.log("Hata var koç!")
            console.log(err);
        }else{
            console.log("Bütün girdiler");
            console.log(foundBlogs);
            res.render()
        }

    })
})


module.exports=router;