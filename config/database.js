const mongoose = require("mongoose");

const database = async () => {
    const uri = process.env.DATABASE_URL;
    mongoose.connect(uri);
    const connection = await mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDB database connection established successfully");
    });
}
module.exports = database;