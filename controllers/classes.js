const ClassNames = require("../models/class.modal");
const createClass = async(req,res) =>{
    try{
        const className = await ClassNames.create(req.body)
        res.status(201).send({className,message:"sucessfully created"})
    }catch(error){
        res.status(404).send({message:error.message})
    }
}

module.exports = {
    createClass
}