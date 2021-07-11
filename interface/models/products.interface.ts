import { Document } from 'mongoose';

export interface IProducts extends Document {
    id: number;
    name: string;
    price: number;
    description: string;
    status: string;
    pathIMG: string;
}
