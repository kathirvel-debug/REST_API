import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    size:String,
})