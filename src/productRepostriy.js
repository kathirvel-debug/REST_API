import { userSchema } from "./productSchema.js";
import mongoose from "mongoose";
// creating model from schema.
const UserModel = mongoose.model('data', userSchema)
export default class UserRepository{
async addproduct(data){
try{
    const newproduct=new UserModel(data);
    await newproduct.save();
    return newproduct;
}
catch(err){
    console.log("error in db ");
    console.log(err);

}
    }

    async getAllDocuments() {
        try {
          // Find all documents in the MyModel collection
          const documents= await UserModel.find({});
      
         return documents;
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
    }

    async deleteproduct(data){
        try{
            const documents=await UserModel.deleteOne({name:data})
            return documents
        }
        catch(err){

        }
    }
    async update(data1,data2){
        try{
            const documents=await UserModel.updateOne({ name: data1 }, { price: data2 });
            return documents
        }
        catch(err){

        }
    }
}