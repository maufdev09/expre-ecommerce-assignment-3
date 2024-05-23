import express from 'express';
import { ProductController } from './product.controller';


const router=express.Router();

//will call controller function

router.post("/products", ProductController.createProduct)
router.get("/products", ProductController.getAllProducts)
router.get("/products/:productId", ProductController.getSingleProduct)
router.delete("/products/:productId", ProductController.deleteSingleProduct)

export const ProductRoutes =router