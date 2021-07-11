import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Newsletter } from '../models/Newsletter';
import { Products } from '../models/Products';
import { Articles } from '../models/Articles';
import { Orders } from '../models/Orders';

import { buildResponse, buildErrorResponse } from '../utils/response.utils';
import { IProducts } from '../interface/models/products.interface';
import { IArticles } from '../interface/models/articles.interface';
import { INewsletterRequest } from '../request/newslatter.request';
import { IOrderRequest } from '../request/order.request';

const handleEmailErrors = (err: { message: string; code: number }): string => {
    let error;

    if (err.message === 'newslatter validation failed: email: Please enter an email address') {
        error = 'Please enter an email address';
        return error;
    }

    if (err.message === 'newslatter validation failed: email: Please enter a valid email address') {
        error = 'Please enter a valid email address';
        return error;
    }

    if (err.code === 11000) {
        error = 'That email is already registered';
        return error;
    }

    return err.message;
};

export const products_get = async (req: Request, res: Response) => {
    try {
        const products = await Products.find({});

        res
        .status(StatusCodes.OK)
        .json(buildResponse<IProducts[]>(StatusCodes.OK, 'Success', products));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(buildErrorResponse(StatusCodes.INTERNAL_SERVER_ERROR, err.message, err));
    }
};

export const newProducts_get = async (req: Request, res: Response) => {
    const status = 'new';
    try {
        const products = await Products.find({ status });

        res
        .status(StatusCodes.OK)
        .json(buildResponse<IProducts[]>(StatusCodes.OK, 'Success', products));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(buildErrorResponse(StatusCodes.INTERNAL_SERVER_ERROR, err.message, err));
    }
};

export const product_get = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const product = await Products.findOne({ id });

        if(!product){
            throw new Error('The product with this ID does not exist');
        }

        res
        .status(StatusCodes.OK)
        .json(buildResponse<IProducts>(StatusCodes.OK, 'Success', product));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(buildErrorResponse(StatusCodes.INTERNAL_SERVER_ERROR, err.message, err));
    }
};

export const articles_get = async (req: Request, res: Response) => {
    try {
        const articles = await Articles.find({});

        res
        .status(StatusCodes.OK)
        .json(buildResponse<IArticles[]>(StatusCodes.OK, 'Success', articles))} 
    catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(buildErrorResponse(StatusCodes.INTERNAL_SERVER_ERROR, err.message, err));
    }
};

export const newslatter_post = async (req: {body: INewsletterRequest}, res: Response) => {
    const { email } = req.body;

    try {
        await Newsletter.create({ email });
        res.status(StatusCodes.CREATED).json({ success: `${email} has been subscribed to the newsletter!` });
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json(buildErrorResponse(StatusCodes.BAD_REQUEST, handleEmailErrors(err), err));
    }
};

export const orders_post = async (req: {body: IOrderRequest}, res: Response) => {
    const { firstName, lastName, email, phone, cost, address, delivery, payment, products } = req.body;
    try {
        const order = await Orders.create({
            firstName,
            lastName,
            email,
            phone,
            cost,
            address,
            delivery,
            payment,
            products
        });

        res.status(StatusCodes.CREATED).json(buildResponse<string>(StatusCodes.OK, 'Success, your order has been placed', order.id));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(buildErrorResponse(StatusCodes.INTERNAL_SERVER_ERROR, err.message, err));
    }
};
