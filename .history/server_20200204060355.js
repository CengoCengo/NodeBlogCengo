//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

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

//mongodb native

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://127.0.0.1:27017/';
//
// // Database Name
// const dbName = 'CengoDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser:true});
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   insertDocuments(db, function(){
//     client.close();
//   })
// });
//
// const insertDocuments = function(db, callback) {
//
// const collection = db.collection('Articles');
//
// collection.insertMany([
//   {
//     Baslik: "lor",
//     Kategori: "Fil Kafası",
//     Özet: "asdasd"
//
//   },
//   {
//     Baslik: "lor",
//     Kategori: "Fil Kafası",
//     Özet:"sdaasd"
//   },
//   {
//     Baslik: "lor",
//     Kategori: "Fil Kafası",
//     Özet:"asdasd"
//   }
// ], function(err, result) {
//
// assert.equal(err,null);
// assert.equal(3,result.result.n);
// assert.equal(3, result.ops.length);
//
// console.log("Inserted 3 documents into the collection");
// callback(result);
//
// })
//
// }
