import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://balaji:balaji91221@cluster0.ehqcmgw.mongodb.net/?').then(()=>console.log("DB Connected"));
}