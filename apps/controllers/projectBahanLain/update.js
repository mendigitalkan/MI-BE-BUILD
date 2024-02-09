"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectLain = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectBahanLain_1 = require("../../models/projectBahanLain");
const updateProjectLain = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectBahanLainKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectLain = await projectBahanLain_1.ProjectBahanLainModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBahanLainKode: { [sequelize_1.Op.eq]: requestBody.projectBahanLainKode }
            }
        });
        if (projectLain === null) {
            const message = 'project lain not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.projectBahanLainNama?.length > 0 && {
                projectBahanLainNama: requestBody.projectBahanLainNama
            }),
            ...(requestBody.projectBahanLainQty?.toString().length > 0 && {
                projectBahanLainQty: requestBody.projectBahanLainQty
            }),
            ...(requestBody.projectBahanLainHarga?.toString().length > 0 && {
                projectBahanLainHarga: requestBody.projectBahanLainHarga
            }),
            ...(requestBody.projectBahanLainStatus?.length > 0 && {
                projectBahanLainStatus: requestBody.projectBahanLainStatus
            }),
            ...(requestBody.projectBahanLainRevisi?.toString().length > 0 && {
                projectBahanLainRevisi: requestBody.projectBahanLainRevisi
            }),
            ...(requestBody.projectBahanLainUserRevisi?.toString().length > 0 && {
                projectBahanLainUserRevisi: requestBody.projectBahanLainUserRevisi
            }),
            ...(requestBody.projectBahanLainKet1?.toString().length > 0 && {
                projectBahanLainKet1: requestBody.projectBahanLainKet1
            }),
            ...(requestBody.projectBahanLainKet2?.toString().length > 0 && {
                projectBahanLainKet2: requestBody.projectBahanLainKet2
            })
        };
        await projectBahanLain_1.ProjectBahanLainModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBahanLainKode: { [sequelize_1.Op.eq]: requestBody.projectBahanLainKode }
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
exports.updateProjectLain = updateProjectLain;
