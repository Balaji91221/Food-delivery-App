import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
},{minimize:false})//if not false it will not createe crat data with default value

const userModel=mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;