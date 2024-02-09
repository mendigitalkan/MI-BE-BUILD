"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.biayaKerjaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const biayaKerja_1 = require("../../controllers/biayaKerja");
const biayaKerjaRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/biaya-kerja', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await biayaKerja_1.biayaKerjaController.findAll(req, res));
    router.get('/detail/:biayaKerjaKode', middlewares_1.middleware.useAuthorization, async (req, res) => await biayaKerja_1.biayaKerjaController.findDetail(req, res));
    router.post('/', async (req, res) => await biayaKerja_1.biayaKerjaController.create(req, res));
    router.patch('/', async (req, res) => await biayaKerja_1.biayaKerjaController.update(req, res));
    router.delete('/', async (req, res) => await biayaKerja_1.biayaKerjaController.remove(req, res));
};
exports.biayaKerjaRoutes = biayaKerjaRoutes;
