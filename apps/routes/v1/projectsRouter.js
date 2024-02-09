"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const project_1 = require("../../controllers/project");
const projectRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/projects', router);
    router.post('/', middlewares_1.middleware.useAuthorization, async (req, res) => await project_1.projectController.create(req, res));
};
exports.projectRoutes = projectRoutes;
