"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bahanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const bahan_1 = require("../../controllers/bahan");
const bahanRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/bahan', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await bahan_1.bahanController.findAll(req, res));
    router.get('/detail/:bahanKode', middlewares_1.middleware.useAuthorization, async (req, res) => await bahan_1.bahanController.findDetail(req, res));
    router.post('/', async (req, res) => await bahan_1.bahanController.create(req, res));
    router.patch('/', async (req, res) => await bahan_1.bahanController.update(req, res));
    router.delete('/', async (req, res) => await bahan_1.bahanController.remove(req, res));
};
exports.bahanRoutes = bahanRoutes;
