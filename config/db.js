const mongoose = require('mongoose');
const config = require('config');

const mongoDB = config.get("mongoURI");

// Set up connection to database using Async and Await

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDB);
        console.log("Connected to MongoDB...")
    } catch (error) {
        console.log(error.message)
// If failure to connect - exit out.
        process.exit(1);
    }
}

module.exports = connectDB;