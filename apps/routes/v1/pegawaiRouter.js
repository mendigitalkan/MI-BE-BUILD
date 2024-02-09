"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pegawaiRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const pegawai_1 = require("../../controllers/pegawai");
const pegawaiRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/pegawai', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await pegawai_1.pegawaiController.findAll(req, res));
    router.get('/detail/:pegawaiKode', middlewares_1.middleware.useAuthorization, async (req, res) => await pegawai_1.pegawaiController.findDetail(req, res));
    router.post('/', async (req, res) => await pegawai_1.pegawaiController.create(req, res));
    router.patch('/', async (req, res) => await pegawai_1.pegawaiController.update(req, res));
    router.delete('/', async (req, res) => await pegawai_1.pegawaiController.remove(req, res));
};
exports.pegawaiRoutes = pegawaiRoutes;
