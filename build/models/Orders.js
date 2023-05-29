"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var ordersSchema = new mongoose_1.default.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: [true, 'Please enter a first name'],
        validate: [validator_1.default.isAlpha, 'The first name can only consist of the letters A-Z']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name'],
        validate: [validator_1.default.isAlpha, 'The last name can only consist of the letters A-Z']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        lowercase: true,
        validate: [validator_1.default.isEmail, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Please enter an phone number'],
        validate: [validator_1.default.isMobilePhone, 'Please enter a valid phone number']
    },
    cost: {
        type: String,
        required: [true, 'Please enter an cost basket'],
        validate: [validator_1.default.isFloat, 'Please enter a valid cost basket']
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
exports.Orders = mongoose_1.default.model('orders', ordersSchema);
