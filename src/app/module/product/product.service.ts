import { ProductModel } from './product.model';
import { Product } from "./product.interface";

const createProductIntoDB=async(product:Product) =>{
const result = await ProductModel.create(product)
return result
}

const geAllProductFromDB=async() =>{
    const result = await ProductModel.find()
    return result
}

const getProductByIdFromDB=async(Id:string)=>{
    const result = await ProductModel.findOne({_id:Id})
    return result
}
const deleteProductByIdFromDB=async(Id:string)=>{
    const result = await ProductModel.deleteOne({_id:Id})
    return result
}
const updateProductByIdFromDB=async(productId:string, updatedProductData:Product)=>{
    const result = await ProductModel.findByIdAndUpdate(productId, updatedProductData,{new:true})
    return result
}

const searchProductByIdFromDB=async(searchTerm:string)=>{

    const  regex = new RegExp(searchTerm, "i");
    const result = await ProductModel.find({

        $or:[
            {name: {$regex: regex}},
            {tags: {$regex: regex}},
        ]
    })
    return result
}




export const ProductServices= {
    createProductIntoDB,
    geAllProductFromDB,
    getProductByIdFromDB,
    deleteProductByIdFromDB,
    updateProductByIdFromDB,
    searchProductByIdFromDB,
}