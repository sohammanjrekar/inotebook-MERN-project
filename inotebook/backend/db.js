const mongoose = require("mongoose");
const connectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/soham", () => {
        console.log("success");
    });
};
module.exports = connectToMongo;
