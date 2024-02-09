"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const margin_1 = require("../../controllers/margin");
const marginRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/margins', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await margin_1.marginController.findAll(req, res));
    router.get('/detail/:marginKode', middlewares_1.middleware.useAuthorization, async (req, res) => await margin_1.marginController.findDetail(req, res));
    router.post('/', async (req, res) => await margin_1.marginController.create(req, res));
    router.patch('/', async (req, res) => await margin_1.marginController.update(req, res));
    router.delete('/', async (req, res) => await margin_1.marginController.remove(req, res));
};
exports.marginRoutes = marginRoutes;
