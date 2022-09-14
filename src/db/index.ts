import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://Joslen:joslen2912@cluster0.hnkxrvy.mongodb.net/EpicureDB");
};

export { connectDb }