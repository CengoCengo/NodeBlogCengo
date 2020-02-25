const express = require('express'),
      router = express.Router();


router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});


module.exports=router;