const express = require('express'),
      router = express.Router();


router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.post("signin", (req,res)=>{

});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("signin", (req,res)=>{

});


module.exports=router;