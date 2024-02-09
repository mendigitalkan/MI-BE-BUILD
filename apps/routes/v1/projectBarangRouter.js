"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectBarangRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectBarang_1 = require("../../controllers/projectBarang");
const projectBarangRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-barang', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectBarang_1.projectBarangController.findAll(req, res));
    router.get('/detail/:projectBarangKodeProject', middlewares_1.middleware.useAuthorization, async (req, res) => await projectBarang_1.projectBarangController.findDetail(req, res));
    router.post('/', async (req, res) => await projectBarang_1.projectBarangController.create(req, res));
    router.patch('/', async (req, res) => await projectBarang_1.projectBarangController.update(req, res));
    router.delete('/', async (req, res) => await projectBarang_1.projectBarangController.remove(req, res));
};
exports.projectBarangRoutes = projectBarangRoutes;
