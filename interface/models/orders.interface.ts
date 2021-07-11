import { Document } from 'mongoose';
import { IBasket } from '../basket.interface';

export interface IOrders extends Document {
    date: Date,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    cost: string,
    delivery: string,
    payment: string,
    address: {
        city: string;
        adres: string;
        postalCode: string;
        country: string;
    },
    products: IBasket[]
}
