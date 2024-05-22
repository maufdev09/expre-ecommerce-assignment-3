import { Schema, model, connect } from "mongoose";
import { Inventory, Product, Variants } from "./product.interface";





const variantSchema = new Schema<Variants>({
    type: { type: String, required: true },
    value: { type: String, required: true }
})

const inventorySchema = new Schema<Inventory>({

    Quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
})




const productSchema = new Schema<Product>({

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: "number", required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true }

})