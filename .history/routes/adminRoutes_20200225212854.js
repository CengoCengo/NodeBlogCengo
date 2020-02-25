router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

module.exports=router;