"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const supplier_1 = require("../../controllers/supplier");
const supplierRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/suppliers', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await supplier_1.supplierController.findAll(req, res));
    router.get('/detail/:supplierKode', middlewares_1.middleware.useAuthorization, async (req, res) => await supplier_1.supplierController.findDetail(req, res));
    router.post('/', async (req, res) => await supplier_1.supplierController.create(req, res));
    router.patch('/', async (req, res) => await supplier_1.supplierController.update(req, res));
    router.delete('/', async (req, res) => await supplier_1.supplierController.remove(req, res));
};
exports.supplierRoutes = supplierRoutes;
