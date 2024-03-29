"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productsController_1 = require("../controllers/productsController");
var router = express_1.Router();
router.get('/products', productsController_1.products_get);
router.get('/new-products', productsController_1.newProducts_get);
router.get('/product/:id', productsController_1.product_get);
router.get('/articles', productsController_1.articles_get);
router.post('/orders', productsController_1.orders_post);
router.post('/newslatter', productsController_1.newslatter_post);
exports.default = router;
