import mongoose from 'mongoose';
import validator from 'validator';
import { IOrders } from '../interface/models/orders.interface';

const ordersSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: [true, 'Please enter a first name'],
        validate: [validator.isAlpha, 'The first name can only consist of the letters A-Z']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name'],
        validate: [validator.isAlpha, 'The last name can only consist of the letters A-Z']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Please enter an phone number'],
        validate: [validator.isMobilePhone, 'Please enter a valid phone number']
    },
    cost: {
        type: String,
        required: [true, 'Please enter an cost basket'],
        validate: [validator.isFloat, 'Please enter a valid cost basket']
    },
    delivery: {
        type: String,
        required: [true, 'Please enter delivery']
    },
    payment: {
        type: String,
        required: [true, 'Please enter payment']
    },
    address: {
        type: Object,
        required: [true, 'Please enter address']
    },
    products: {
        type: Array,
        required: [true, 'Please enter an list products']
    }
});

export const Orders = mongoose.model<IOrders>('orders', ordersSchema);
