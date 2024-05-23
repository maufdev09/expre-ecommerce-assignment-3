import { Schema, model, connect } from "mongoose";
import { Inventory, Product, Product, Variants } from "./product.interface";





const variantSchema = new Schema<Variants>({
    type: { type: String, required: true },
    value: { type: String, required: true }
})

const inventorySchema = new Schema<Inventory>({

    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true  }
})




const productSchema = new Schema<Product>({

    name: { type: String, required: [true , "name is required"] },
    description: { type: String, required: [true , "description is required"] },
    price: { type: "number", required: [true , "price is required"] },
    category: { type: String, required: [ true ,"category is required"] },
    tags: { type: [String], required: [true , "tags is required"] },
    variants: { type: [variantSchema], required:[true , "variants is required"] },
    inventory: { type: inventorySchema, required:[true , "inventory is required"] }

})

export const ProductModel=model<Product>('Product',productSchema)


