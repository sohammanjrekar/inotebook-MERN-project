const mongoose = require('mongoose')
const coonectToMongo=()=>{
  mongoose.connect("mongodb://localhost:27017/sohamdb",()=>{
    console.log("success");
  })
}