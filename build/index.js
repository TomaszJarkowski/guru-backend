"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var productsRouter_1 = __importDefault(require("./routes/productsRouter"));
require('dotenv').config();
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
// set up routes
app.use('/', productsRouter_1.default);
var PORT = process.env.PORT || 3004;
app.listen(PORT, function () {
    console.log("The server has started on port " + PORT);
});
app.get('/', function (req, res) {
    res.send({
        text: 'Welcome in guru shop'
    });
});
mongoose_1.default.connect(process.env.DB_CONNECT, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true
}, function (err) {
    if (err)
        throw err;
    console.log('MongoDB connection established');
});
