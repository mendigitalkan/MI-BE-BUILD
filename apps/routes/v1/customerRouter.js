"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const customers_1 = require("../../controllers/customers");
const customersRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/customers', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await customers_1.customerController.findAll(req, res));
    router.get('/detail/:customerKode', middlewares_1.middleware.useAuthorization, async (req, res) => await customers_1.customerController.findDetail(req, res));
    router.post('/', async (req, res) => await customers_1.customerController.create(req, res));
    router.patch('/', async (req, res) => await customers_1.customerController.update(req, res));
    router.delete('/', async (req, res) => await customers_1.customerController.remove(req, res));
};
exports.customersRoutes = customersRoutes;
