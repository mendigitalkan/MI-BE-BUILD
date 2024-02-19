"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gambarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectGambar_1 = require("../../controllers/projectGambar");
const gambarRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/gambar', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectGambar_1.gambarController.findAll(req, res));
    router.get('/detail/:gambarKode', middlewares_1.middleware.useAuthorization, async (req, res) => await projectGambar_1.gambarController.findDetail(req, res));
    router.post('/', async (req, res) => await projectGambar_1.gambarController.create(req, res));
    router.patch('/', async (req, res) => await projectGambar_1.gambarController.update(req, res));
    router.delete('/', async (req, res) => await projectGambar_1.gambarController.remove(req, res));
};
exports.gambarRoutes = gambarRoutes;
