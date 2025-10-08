import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

export default connectDB;
