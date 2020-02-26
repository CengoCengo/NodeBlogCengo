const express = require('express'),
      router = express.Router();


let adminActions = [{
    actionId:1,
    actionName: "changeHomeImage",
    displayName: "Change Home Image "

},
{


}
]

router.get("/admin", (req,res)=>{
    res.render("./admin/admin.ejs")
})


router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.post("/signin", (req,res)=>{

});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("/signup", (req,res)=>{

});


module.exports=router;