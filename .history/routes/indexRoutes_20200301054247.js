const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("main.ejs")
});

router.get("/video", (req,res)=>{
    res.render("video.ejs")
});

router.get("/blog/showBlog")


module.exports=router;