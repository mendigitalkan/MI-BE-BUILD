"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCetakRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectCetak_1 = require("../../controllers/projectCetak");
const projectCetakRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-cetak', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectCetak_1.projectCetakController.findAll(req, res));
    router.get('/detail/:projectCetakKode', middlewares_1.middleware.useAuthorization, async (req, res) => await projectCetak_1.projectCetakController.findDetail(req, res));
    router.post('/', async (req, res) => await projectCetak_1.projectCetakController.create(req, res));
    router.patch('/', async (req, res) => await projectCetak_1.projectCetakController.update(req, res));
    router.delete('/', async (req, res) => await projectCetak_1.projectCetakController.remove(req, res));
};
exports.projectCetakRoutes = projectCetakRoutes;
