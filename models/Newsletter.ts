import mongoose from 'mongoose';
import validator from 'validator';
import { INewsletter } from '../interface/models/newsletter.interface';

const newslatterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    }
});

export const Newsletter = mongoose.model<INewsletter>('newslatter', newslatterSchema);
