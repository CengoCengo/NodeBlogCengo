const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    title: {type: String, required: 'Cannot be empty'},
    comsentence: {type: String, required: 'Cannot be empty'},
    titcomImage: {type: String, required: 'Cannot be empty'}

});

module.exports=mongoose.model("Blog", blogSchema);
