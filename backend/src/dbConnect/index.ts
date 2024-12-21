import mongoose from "mongoose";
import dotenv from "dotenv";

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();

/**
 * Establishes a connection to the MongoDB database.
 * @param dbName - The name of the database to connect to. Defaults to the value of `DBNAME` in the .env file.
 */
const dbConnect = async (dbName: string = process.env.DBNAME || ""): Promise<void> => {
    if (!dbName) {
        console.error("Error: Database name is not provided. Please set the DBNAME environment variable or pass a name.");
        return;
    }

    try {
        console.log("Attempting to connect to MongoDB...");

        // Base MongoDB URI
        const baseURI: string = "mongodb://127.0.0.1:27017/";

        // Connect to MongoDB
        await mongoose.connect(baseURI + dbName);

        console.log(`Successfully connected to MongoDB database: ${dbName}`);
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default dbConnect;
