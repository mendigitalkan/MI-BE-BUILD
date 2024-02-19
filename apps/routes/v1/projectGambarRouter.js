"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectGambarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectGambar_1 = require("../../controllers/projectGambar");
const projectGambarRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-gambar', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectGambar_1.projectGambarController.findAll(req, res));
    router.get('/detail/:gambarKode', middlewares_1.middleware.useAuthorization, async (req, res) => await projectGambar_1.projectGambarController.findDetail(req, res));
    router.post('/', async (req, res) => await projectGambar_1.projectGambarController.create(req, res));
    router.patch('/', async (req, res) => await projectGambar_1.projectGambarController.update(req, res));
    router.delete('/', async (req, res) => await projectGambar_1.projectGambarController.remove(req, res));
};
exports.projectGambarRoutes = projectGambarRoutes;
