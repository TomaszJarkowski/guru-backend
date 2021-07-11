import { IProducts } from './../interface/models/products.interface';
import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    status: String,
    pathIMG: String
});

export const Products = mongoose.model<IProducts>('products', productsSchema);
