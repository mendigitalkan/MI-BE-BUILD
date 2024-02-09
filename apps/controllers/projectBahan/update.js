"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectBahan = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectBahan_1 = require("../../models/projectBahan");
const updateProjectBahan = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectBahanKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectBahan = await projectBahan_1.ProjectBahanModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBahanKode: { [sequelize_1.Op.eq]: requestBody.projectBahanKode }
            }
        });
        if (projectBahan === null) {
            const message = 'project bahan not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.projectBahanKodeWarna?.length > 0 && {
                projectBahanKodeWarna: requestBody.projectBahanKodeWarna
            }),
            ...(requestBody.projectBahanPanjang?.toString().length > 0 && {
                projectBahanPanjang: requestBody.projectBahanPanjang
            }),
            ...(requestBody.projectBahanLebar?.toString().length > 0 && {
                projectBahanLebar: requestBody.projectBahanLebar
            }),
            ...(requestBody.projectBahanQty?.toString().length > 0 && {
                projectBahanQty: requestBody.projectBahanQty
            }),
            ...(requestBody.projectBahanStatus?.length > 0 && {
                projectBahanStatus: requestBody.projectBahanStatus
            }),
            ...(requestBody.projectBahanRevisi?.toString().length > 0 && {
                projectBahanRevisi: requestBody.projectBahanRevisi
            }),
            ...(requestBody.projectBahanUserRevisi?.length > 0 && {
                projectBahanUserRevisi: requestBody.projectBahanUserRevisi
            }),
            ...(requestBody.projectBahanKet1?.length > 0 && {
                projectBahanKet1: requestBody.projectBahanKet1
            }),
            ...(requestBody.projectBahanKet2?.length > 0 && {
                projectBahanKet2: requestBody.projectBahanKet2
            })
        };
        await projectBahan_1.ProjectBahanModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBahanKode: { [sequelize_1.Op.eq]: requestBody.projectBahanKode }
            }
        });
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
exports.updateProjectBahan = updateProjectBahan;
