const mongoose=require('mongoose');

const dotenv = require("dotenv");

dotenv.config();

// const url="mongodb://localhost:27017/cartow";
// const url="mongodb+srv://priyanshi1jariwala:prps22452245@cluster0.pekprfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbURI = process.env.DATABASE;

const connectToMongo = async () => {
    try {
      await mongoose.connect(dbURI, {
        serverSelectionTimeoutMS: 30000, // 30 seconds
      });
      console.log("Connected to MongoDB successfully...");
    } catch (e) {
      console.error("Error connecting to MongoDB:", e);
    }
  };
  
  module.exports = connectToMongo;