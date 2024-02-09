"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectCetak = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectCetak_1 = require("../../models/projectCetak");
const updateProjectCetak = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectCetakKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectCetak = await projectCetak_1.ProjectCetakModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectCetakKode: { [sequelize_1.Op.eq]: requestBody.projectCetakKode }
            }
        });
        if (projectCetak === null) {
            const message = 'project cetak not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.projectCetakKodeCetak?.toString().length > 0 && {
                projectCetakKodeCetak: requestBody.projectCetakKodeCetak
            }),
            ...(requestBody.projectCetakPanjang?.toString().length > 0 && {
                projectCetakPanjang: requestBody.projectCetakPanjang
            }),
            ...(requestBody.projectCetakLebar?.toString().length > 0 && {
                projectCetakLebar: requestBody.projectCetakLebar
            }),
            ...(requestBody.projectCetakQty?.toString().length > 0 && {
                projectCetakQty: requestBody.projectCetakQty
            }),
            ...(requestBody.projectCetakStatus?.toString().length > 0 && {
                projectCetakStatus: requestBody.projectCetakStatus
            }),
            ...(requestBody.projectCetakRevisi?.toString().length > 0 && {
                projectCetakRevisi: requestBody.projectCetakRevisi
            }),
            ...(requestBody.projectCetakUserRevisi?.toString().length > 0 && {
                projectCetakUserRevisi: requestBody.projectCetakUserRevisi
            }),
            ...(requestBody.projectCetakKet1?.toString().length > 0 && {
                projectCetakKet1: requestBody.projectCetakKet1
            }),
            ...(requestBody.projectCetakKet2?.toString().length > 0 && {
                projectCetakKet2: requestBody.projectCetakKet2
            })
        };
        await projectCetak_1.ProjectCetakModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectCetakKode: { [sequelize_1.Op.eq]: requestBody.projectCetakKode }
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
exports.updateProjectCetak = updateProjectCetak;
