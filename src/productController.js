import product_model from "./productmodel.js";
import productRepository from"./productRepostriy.js"
const product =new productRepository();
export default class productController{
    
   async add(req,res){
        try{
            console.log(req.body);
            const {name,desc,price,size}=req.body
            console.log(name)
            const data=new product_model(name,desc,price,size)
            await product.addproduct(data)
            res.status(201).json({ data });
        }
        catch(err){
            res.status(500).send("Internal Server Error");
        }

    
    }
    async getproduct(req,res){
        try{
           const list= await product.getAllDocuments()
            if (list.length > 0) {
                console.log('All Documents:');
                console.log(list);
                res.status(200).json({ list })
              } else {
                console.log('No documents found.');
              }
        }
        catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }

    }
    
    async delete(req,res){
        try{
            console.log(req.body);
            const {name}=req.body
            console.log(name)
    
           const data= await product.deleteproduct(name)
            res.status(200).send("Deleted");
        }
        catch(err){
            res.status(500).send("Internal Server Error");
        }

    
    }
    async update(req,res){
        try{
            const{name,price}=req.body
            console.log(name)
    
           const data= await product.update(name,price)
            res.status(200).send("update");
        }
        catch(err){

        }
    }
       
} 
