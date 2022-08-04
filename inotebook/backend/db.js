const mongoose = require('mongoose')
const mongoURI="mongodb://localhost:27017/test";

const connctToMongo= ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect successfully")
    })
}