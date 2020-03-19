const express = require('express'),
Blog = require('../models/blogModel'),
passport = require("passport"),
router = express.Router(),
User= require('../models/userModel');


//adminRoute
router.get("/admin", isLoggedIn, (req,res)=>{
    res.render("./admin/admin.ejs")
});

router.post("/admin", isLoggedIn, (req,res)=>{
    console.log(req.body.data);
    const title = req.body.data.blogTitle;
    const comSentence = req.body.data.comSentence;
    const comImage = req.body.data.comImage;
    const blog = req.body.data.blog;

    const newBlog = {title:title, comSentence:comSentence, comImage:comImage,blog:blog};

    Blog.create(newBlog).then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
        res.redirect
    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    });
});

//admin blogs list 
router.get("/blog/blogList", isLoggedIn, (req,res)=> {
    
    Blog.find({},(err,foundBlogs)=>{
        
        if(err){
            console.log("Hata var koç!")
            console.log(err);
        }else{
            console.log("Bütün girdiler");
            console.log(foundBlogs);
            res.render("blog/blogList.ejs", {foundBlogs:foundBlogs});
        }

    })

})



router.get('/blog/:blogId',(req,res)=>{
    Blog.findById(req.params.blogId).then((foundBlogs)=>{

        res.render("./blog/singleBlog.ejs", {foundBlogs:foundBlogs});

    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    })
})

//delete

router.delete('/blog/:blogId',  isLoggedIn, async (req,res) =>{
    let deletedBlog
    try {
        deletedBlog = await Blog.findById(req.params.blogId)
        await deletedBlog.remove()
        res.redirect("/blog/blogList")
    } catch {

        if(deletedBlog == null) {
            res.redirect('/admin')
        } else {
            res.redirect('/blog/:blogId')
        }
        
    } 

})

//edit
router.get('/edit/:blogId', isLoggedIn, (req, res) => {
    Blog.findById(req.params.blogId).then((foundBlogs)=>{

        res.render("./blog/editBlog.ejs", {foundBlogs:foundBlogs});

    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    })
})
  
  
router.put("/edit/:blogId", isLoggedIn, function(req,res){

    Blog.findByIdAndUpdate(req.params.blogId, function(err, foundBlogs){

        if(err){

            console.log(err);
            res.redirect


        } else {
            res.render("./edit/:blogId")
        }

    })

}) 
      
   

  //signin and signup

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

router.get("/signup", isLoggedIn, (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("/signup", isLoggedIn, (req,res)=>{
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


//isLoggedIn

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}





module.exports=router;