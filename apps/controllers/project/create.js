"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
// import { requestChecker } from '../../utilities/requestCheker'
// import { generateUniqueId } from '../../utilities/generateId'
const projectKerja_1 = require("../../models/projectKerja");
const projectBarang_1 = require("../../models/projectBarang");
const projectBahan_1 = require("../../models/projectBahan");
const projectCetak_1 = require("../../models/projectCetak");
const projectBahanLain_1 = require("../../models/projectBahanLain");
const projectGambar_1 = require("../../models/projectGambar");
const createProject = async (req, res) => {
    const payload = req.body;
    try {
        console.log('_____________________');
        console.log(payload);
        await projectKerja_1.ProjectKerjaModel.create(payload.formProjectKerja);
        await projectBarang_1.ProjectBarangModel.create(payload.formProjectBarang);
        await projectBahan_1.ProjectBahanModel.bulkCreate(payload.formProjectBahan);
        await projectCetak_1.ProjectCetakModel.bulkCreate(payload.formProjectPrinting);
        await projectBahanLain_1.ProjectBahanLainModel.bulkCreate(payload.formProjectBahanLain);
        await projectGambar_1.ProjectGambarModel.bulkCreate(payload.formProjectGambar);
        const response = response_1.ResponseData.default;
        const result = { message: 'success' };
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.createProject = createProject;
