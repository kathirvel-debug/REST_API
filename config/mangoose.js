import mongoose from "mongoose";
const url = 'mongodb://localhost/skilltest';
const connectUsingMongoose = async()=>{
   try {
        await mongoose.connect('mongodb://localhost/skilltest');
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
      }
}

export default connectUsingMongoose
