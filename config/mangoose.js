import mongoose from "mongoose";
const url = 'mongodb://0.0.0.0:27017/skilltest';
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