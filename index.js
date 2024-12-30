const express = require("express");
const app = express()
const mongoose = require("mongoose");

app.use(express.json());

const classRoutes = require("./routes/class.route")


mongoose.connect("mongodb+srv://amarkumarreddynew:2GZpEpYjHrwnEJum@school.1zron.mongodb.net/?retryWrites=true&w=majority&appName=School")
  .then(() =>{
    app.listen("3000")
    console.log("Connected!")
  });

app.use("/classes",classRoutes)

