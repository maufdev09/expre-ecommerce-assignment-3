import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: productData } = req.body

        const result = await ProductServices.createProductIntoDB(productData)
console.log(productData);



        res.status(200).json(
            {
                success: true,
                message: "Product created successfully!",
                data: result,

            }
        )
    } catch (error) {
        console.log(error);

    }
}

const  getAllProducts=async (req: Request, res: Response)=>{
    try {
const  result= await ProductServices.geAllProductFromDB()
res.status(200).json(
    {
        success: true,
        message: "Products fetched successfully!",
        data: result,

    }
)
        
    } catch (error) {
       console.log(error);
        
    }
}



export const ProductController = {
    createProduct
}