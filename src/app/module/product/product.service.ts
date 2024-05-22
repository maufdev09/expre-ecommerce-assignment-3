import { ProductModel } from './product.model';
import { Product } from "./product.interface";

const createProductIntoDB=async(product:Product) =>{
const result = await ProductModel.create(product)
return result
}

const geAllProductFromDB=async() =>{
    const result = await ProductModel.find()
}



export const ProductServices= {
    createProductIntoDB,
}