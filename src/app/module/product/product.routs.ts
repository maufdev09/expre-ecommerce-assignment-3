import express from 'express';
import { ProductController } from './product.controller';


const router=express.Router();

//will call controller function

router.post("/", ProductController.createProduct)
router.get("/", ProductController.searchAndGetAllProduct)
router.get("/:productId", ProductController.getSingleProduct)
router.put("/:productId", ProductController.updateSingleProduct)
router.delete("/:productId", ProductController.deleteSingleProduct)


export const ProductRoutes =router