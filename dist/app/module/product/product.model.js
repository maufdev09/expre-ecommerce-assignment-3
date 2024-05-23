"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "name is required"] },
    description: { type: String, required: [true, "description is required"] },
    price: { type: "number", required: [true, "price is required"] },
    category: { type: String, required: [true, "category is required"] },
    tags: { type: [String], required: [true, "tags is required"] },
    variants: { type: [variantSchema], required: [true, "variants is required"] },
    inventory: { type: inventorySchema, required: [true, "inventory is required"] }
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
