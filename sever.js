import express from 'express'
import router from './src/router.js';
import connectUsingMongoose from './config/mangoose.js'
const sever=express();
var postmanUrl='https://www.postman.com/postman/workspace/postman-public-workspace/request/create?requestId=3cd701b5-3c3f-4293-9fde-a2456a737784'
sever.use(express.json())
sever.use('/api/ecom',router);
sever.get('/',(req,res)=>{
    res.status(200).send("Sever is Running Explore REST API IN Postman:+postmanUrl");
})
sever.listen(8005,()=>{
    console.log("sever is running");
    connectUsingMongoose();
})
