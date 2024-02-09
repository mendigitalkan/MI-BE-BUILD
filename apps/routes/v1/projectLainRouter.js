"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectLainRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const projectLain_1 = require("../../controllers/projectLain");
const projectLainRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/project-lain', router);
    router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await projectLain_1.projectLainController.findAll(req, res));
    router.get('/detail/:projectLainKodes', middlewares_1.middleware.useAuthorization, async (req, res) => await projectLain_1.projectLainController.findDetail(req, res));
    router.post('/', async (req, res) => await projectLain_1.projectLainController.create(req, res));
    router.patch('/', async (req, res) => await projectLain_1.projectLainController.update(req, res));
    router.delete('/', async (req, res) => await projectLain_1.projectLainController.remove(req, res));
};
exports.projectLainRoutes = projectLainRoutes;
