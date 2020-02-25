const express = require('express'),
      router = express.Router();


router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

module.exports=router;