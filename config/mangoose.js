import mongoose from "mongoose";
const url = 'mongodb+srv://kathirvel8926:123@cluster0.1cyv7sb.mongodb.net/?retryWrites=true&w=majority'
const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected using mongoose");
    }catch(err){
        console.log("Error while connecting to db");
        console.log(err);
    }
}

export default connectUsingMongoose
