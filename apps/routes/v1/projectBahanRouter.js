"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectBahanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectBahan_1 = require("../../controllers/projectBahan");
const projectBahanRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-bahan', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectBahan_1.projectBahanController.findAll(req, res));
    router.get('/detail/:projectBahanKode', middlewares_1.middleware.useAuthorization, async (req, res) => await projectBahan_1.projectBahanController.findDetail(req, res));
    router.post('/', async (req, res) => await projectBahan_1.projectBahanController.create(req, res));
    router.patch('/', async (req, res) => await projectBahan_1.projectBahanController.update(req, res));
    router.delete('/', async (req, res) => await projectBahan_1.projectBahanController.remove(req, res));
};
exports.projectBahanRoutes = projectBahanRoutes;
