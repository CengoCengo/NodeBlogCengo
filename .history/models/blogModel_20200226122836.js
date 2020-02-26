const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    title: {type: String, required: 'Cannot be empty'},
    comsentence: {type: String, required: 'Cannot be empty'},
    comImage: {type: String, required: 'Cannot be empty'},
    blog: {type: String, required: 'Cannot be empty'},
    date: {type: Date, default: Date.now},

});


module.exports=mongoose.model("Blog", blogSchema);
