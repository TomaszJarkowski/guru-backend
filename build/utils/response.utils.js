"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildErrorResponse = exports.buildResponse = void 0;
var buildResponse = function (statusCode, message, data) { return ({
    data: data,
    statusCode: statusCode,
    message: message,
}); };
exports.buildResponse = buildResponse;
var buildErrorResponse = function (statusCode, message, errors) { return ({
    statusCode: statusCode,
    message: message,
    errors: errors,
}); };
exports.buildErrorResponse = buildErrorResponse;
