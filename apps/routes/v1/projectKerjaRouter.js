"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectKerjaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectKerja_1 = require("../../controllers/projectKerja");
const projectKerjaRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-kerja', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectKerja_1.projectKerjaController.findAll(req, res));
    router.get('/detail/:projectKerjaKode', middlewares_1.middleware.useAuthorization, async (req, res) => await projectKerja_1.projectKerjaController.findDetail(req, res));
    router.post('/', async (req, res) => await projectKerja_1.projectKerjaController.create(req, res));
    router.patch('/', async (req, res) => await projectKerja_1.projectKerjaController.update(req, res));
    router.delete('/', async (req, res) => await projectKerja_1.projectKerjaController.remove(req, res));
};
exports.projectKerjaRoutes = projectKerjaRoutes;
