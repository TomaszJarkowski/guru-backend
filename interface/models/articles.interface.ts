import { Document } from 'mongoose';

export interface IArticles extends Document {
  id: number;
  title: string;
  description: string;
  imgs: string[];
}
