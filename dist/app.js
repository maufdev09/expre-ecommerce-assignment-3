"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_routs_1 = require("./app/module/product/product.routs");
const order_routs_1 = require("./app/module/order/order.routs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', product_routs_1.ProductRoutes);
app.use('/api/orders', order_routs_1.OrderRoutes);
const getAController = (req, res) => {
    res.send('Hello World!');
};
app.get('/', getAController);
exports.default = app;
