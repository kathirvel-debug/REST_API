import  express  from "express";
import productController from "./productController.js"; 
const product=new productController();
const router=express.Router();
router.get('/',(req,res)=>{
   res.send("Server is ruuning REST API")
})
router.post('/create',(req,res)=>{
   product.add(req,res);

})
router.get('/',(req,res)=>{
   res.send("Server is ruuning REST API")
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
