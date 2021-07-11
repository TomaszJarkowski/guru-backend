import mongoose from 'mongoose';
import { IArticles } from '../interface/models/articles.interface';

const articlesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    imgs: Array
});

export const Articles = mongoose.model<IArticles>('articles', articlesSchema);
