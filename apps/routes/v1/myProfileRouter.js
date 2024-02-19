"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myProfileRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const my_profile_1 = require("../../controllers/my-profile");
const myProfileRouter = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/my-profile', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await my_profile_1.myProfileController.find(req, res));
    router.patch('/', async (req, res) => await my_profile_1.myProfileController.update(req, res));
};
exports.myProfileRouter = myProfileRouter;
