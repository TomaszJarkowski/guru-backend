"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var newslatterSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, 'Please enter a valid email address']
    }
});
exports.Newsletter = mongoose_1.default.model('newslatter', newslatterSchema);
