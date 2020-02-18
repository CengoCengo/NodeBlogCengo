//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/", function(req,res){
  res.render("main");
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

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CengoDB", {useNewUrlParser:true});

const articleSchema = new mongoose.Schema({
  Baslik: String,
  Kategori: String,
  Özet: String,
  Rating: Number
})

const Article = mongoose.model("Article", articleSchema);

const article = new Article({
Baslik: "loremasdasdasd",
Kategori: "Gırla",
Özet: "Ne diyon la!",
Rating:5
})

article.save();
