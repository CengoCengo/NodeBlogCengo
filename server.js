//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.render("head");
})

app.set("view engine", "ejs");

app.get("/contact", function(req,res){
  res.send("Burası da iletişim bölümü");
})

app.get("/naber", function(req,res){
  res.render("slider")
})

app.listen(3001, function(){

console.log("Server started on port 3000")

});
