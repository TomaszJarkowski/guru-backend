import { Router } from 'express';

import {
    products_get,
    newProducts_get,
    product_get,
    articles_get,
    orders_post,
    newslatter_post
} from '../controllers/productsController';

const router = Router();

router.get('/products', products_get);
router.get('/new-products', newProducts_get);
router.get('/product/:id', product_get);
router.get('/articles', articles_get);
router.post('/orders', orders_post);
router.post('/newslatter', newslatter_post);

export default router;
