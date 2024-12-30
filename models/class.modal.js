const mongoose = require("mongoose");

const classes = mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true,
        }
})

const Classes = mongoose.model("Class",classes)
module.exports = Classes