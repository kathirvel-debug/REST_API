import  express  from "express";
import productController from "./productController.js"; 
const product=new productController();
const router=express.Router();
router.post('/create',(req,res)=>{
   product.add(req,res);

})
router.get('/products',(req,res)=>{
product.getproduct(req,res);
})
router.post('/delete',(req,res)=>{
product.delete(req,res)
})
router.post('/update',(req,res)=>{
product.update(req,res)
})
export default router