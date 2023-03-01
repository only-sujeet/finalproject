const mongoose = require("mongoose")

// const mongoUrl = "mongodb://127.0.0.1:27017/gov";
const mongoUrl = "mongodb+srv://root:root@govcluster.0ibqh8b.mongodb.net/GOVCLUSTER?retryWrites=true&w=majority"

const connectToMongo = () => {
    try {
        mongoose.connect(mongoUrl, () => {
            console.log("Database is Connected")
        })
    } catch (error) {
        console.log("Database Error Accured :-", error);
    }

}

module.exports = connectToMongo;