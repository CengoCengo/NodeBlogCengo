const mongoose = require("mongoose");

const siteSchema = new mongoose.Schemma({
    homeImage: { type: String,required:" Boş olamaz"},
    aboutImage: { type: String,required:" Boş olamaz"},
    contactImage: { type: String,required:" Boş olamaz"},
    homeText: { type: String,required:" Boş olamaz"},
    aboutText: { type: String,required:" Boş olamaz"},
    contactText: { type: String,required:" Boş olamaz"}
});

module.exports = mongoose.model("Site", siteSchema)