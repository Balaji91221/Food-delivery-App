import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    console.log("MongoDB URI:", mongoURI); // Log the URI for debugging
    if (!mongoURI) {
        throw new Error("MONGODB_URI is not defined in .env file");
    }
    try {
        await mongoose.connect(mongoURI); // Remove deprecated options
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};
