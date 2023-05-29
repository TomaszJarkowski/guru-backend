"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var productsSchema = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    status: String,
    pathIMG: String
});
exports.Products = mongoose_1.default.model('products', productsSchema);
