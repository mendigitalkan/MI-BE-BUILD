"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cetakRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const cetakan_1 = require("../../controllers/cetakan");
const cetakRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/cetak', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await cetakan_1.cetakannController.findAll(req, res));
    router.get('/detail/:cetakKode', middlewares_1.middleware.useAuthorization, async (req, res) => await cetakan_1.cetakannController.findDetail(req, res));
    router.post('/', async (req, res) => await cetakan_1.cetakannController.create(req, res));
    router.patch('/', async (req, res) => await cetakan_1.cetakannController.update(req, res));
    router.delete('/', async (req, res) => await cetakan_1.cetakannController.remove(req, res));
};
exports.cetakRoutes = cetakRoutes;
