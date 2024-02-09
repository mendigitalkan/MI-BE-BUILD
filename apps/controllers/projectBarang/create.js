"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectBarang = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const generateId_1 = require("../../utilities/generateId");
const projectBarang_1 = require("../../models/projectBarang");
const createProjectBarang = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: [
            'projectBahanKodeBahan',
            'projectBahanKodeWarna',
            'projectBahanPanjang',
            'projectBahanLebar',
            'projectBahanQty',
            'projectBahanStatus',
            'projectBahanRevisi',
            'projectBahanUserRevisi',
            'projectBahanKet1',
            'projectBahanKet2'
        ],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        requestBody.projectBarangKodeProject = (0, generateId_1.generateUniqueId)();
        await projectBarang_1.ProjectBarangModel.create(requestBody);
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
exports.createProjectBarang = createProjectBarang;
