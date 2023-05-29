"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders_post = exports.newslatter_post = exports.articles_get = exports.product_get = exports.newProducts_get = exports.products_get = void 0;
var http_status_codes_1 = require("http-status-codes");
var Newsletter_1 = require("../models/Newsletter");
var Products_1 = require("../models/Products");
var Articles_1 = require("../models/Articles");
var Orders_1 = require("../models/Orders");
var response_utils_1 = require("../utils/response.utils");
var handleEmailErrors = function (err) {
    var error;
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
var products_get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Products_1.Products.find({})];
            case 1:
                products = _a.sent();
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json(response_utils_1.buildResponse(http_status_codes_1.StatusCodes.OK, 'Success', products));
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, err_1.message, err_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.products_get = products_get;
var newProducts_get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var status, products, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                status = 'new';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Products_1.Products.find({ status: status })];
            case 2:
                products = _a.sent();
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json(response_utils_1.buildResponse(http_status_codes_1.StatusCodes.OK, 'Success', products));
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, err_2.message, err_2));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.newProducts_get = newProducts_get;
var product_get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params.id;
                return [4 /*yield*/, Products_1.Products.findOne({ id: id })];
            case 1:
                product = _a.sent();
                if (!product) {
                    throw new Error('The product with this ID does not exist');
                }
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json(response_utils_1.buildResponse(http_status_codes_1.StatusCodes.OK, 'Success', product));
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, err_3.message, err_3));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.product_get = product_get;
var articles_get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var articles, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Articles_1.Articles.find({})];
            case 1:
                articles = _a.sent();
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json(response_utils_1.buildResponse(http_status_codes_1.StatusCodes.OK, 'Success', articles));
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, err_4.message, err_4));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.articles_get = articles_get;
var newslatter_post = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Newsletter_1.Newsletter.create({ email: email })];
            case 2:
                _a.sent();
                res.status(http_status_codes_1.StatusCodes.CREATED).json({ success: email + " has been subscribed to the newsletter!" });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.BAD_REQUEST, handleEmailErrors(err_5), err_5));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.newslatter_post = newslatter_post;
var orders_post = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, phone, cost, address, delivery, payment, products, order, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, phone = _a.phone, cost = _a.cost, address = _a.address, delivery = _a.delivery, payment = _a.payment, products = _a.products;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Orders_1.Orders.create({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        cost: cost,
                        address: address,
                        delivery: delivery,
                        payment: payment,
                        products: products
                    })];
            case 2:
                order = _b.sent();
                res.status(http_status_codes_1.StatusCodes.CREATED).json(response_utils_1.buildResponse(http_status_codes_1.StatusCodes.OK, 'Success, your order has been placed', order.id));
                return [3 /*break*/, 4];
            case 3:
                err_6 = _b.sent();
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_utils_1.buildErrorResponse(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, err_6.message, err_6));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.orders_post = orders_post;
