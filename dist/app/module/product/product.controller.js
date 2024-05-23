"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductServices.createProductIntoDB(productData);
        console.log(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// const getAllProducts = async (req: Request, res: Response) => {
//     try {
//     } catch (error) {
//         console.log(error);
//     }
// }
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.getProductByIdFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updatedProductData = req.body;
        const result = yield product_service_1.ProductServices.updateProductByIdFromDB(productId, updatedProductData);
        res.status(200).json({
            success: true,
            message: "Products updated successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteProductByIdFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Products deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const searchAndGetAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchItem = req.query.searchTerm;
        if (searchItem) {
            const result = yield product_service_1.ProductServices.searchProductByIdFromDB(searchItem);
            res.status(200).json({
                success: true,
                message: `Products  matching this ${searchItem} fetched successfully! `,
                data: result,
            });
        }
        else {
            const result = yield product_service_1.ProductServices.geAllProductFromDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductController = {
    createProduct,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
    searchAndGetAllProduct
};
