const mongoose = require('mongoose')
const mongoURI="mongodb://localhost:27017/local";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect successfully")
    })
}