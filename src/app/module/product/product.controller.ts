import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const  productData  = req.body

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

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.geAllProductFromDB()
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
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId

        const result = await ProductServices.getProductByIdFromDB(productId)
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
const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const  updatedProductData  = req.body


        const result = await ProductServices.updateProductByIdFromDB(productId,updatedProductData)
        res.status(200).json(
            {
                success: true,
                message: "Products updated successfully!",
                data: result,

            }
        )

    } catch (error) {
        console.log(error);

    }
}

const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId

        const result = await ProductServices.deleteProductByIdFromDB(productId)
        res.status(200).json(
            {
                success: true,
                message: "Products deleted successfully!",
                data: result,

            }
        )

    } catch (error) {
        console.log(error);

    }
}
const searchProduct= async (req: Request, res: Response) => {
    try {
        const searchItem = req.query.searchTerm as string;

        const result = await ProductServices.searchProductByIdFromDB(searchItem)
        res.status(200).json(
            {
                success: true,
                message: "Products  matching this`${searchItem}` fetched successfully!",
                data: result,

            }
        )

    } catch (error) {
        console.log(error);

    }
}



export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
    searchProduct
}