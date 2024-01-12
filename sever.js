import express from 'express'
import router from './src/router.js';
import connectUsingMongoose from './config/mangoose.js'
const sever=express();
sever.use(express.json())
sever.use('/api/ecom',router);

sever.listen(8005,()=>{
    console.log("sever is running");
    connectUsingMongoose();
})