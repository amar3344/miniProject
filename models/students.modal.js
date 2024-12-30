const mongoose = require("mongoose");

const students = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    phonenumber:{
        type:String,
        minlength:10,
        required:true,
        unique:true,
    },
    classId:{
        type:String,
        require:true
    },
},{
    timestamps:true,
},
{
    versionkey:false
}
)