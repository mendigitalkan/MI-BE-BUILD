"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBiayaKerja = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const biayaKerja_1 = require("../../models/biayaKerja");
const updateBiayaKerja = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['biayaKerjaKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const biayaKerja = await biayaKerja_1.BiayaKerjaModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                biayaKerjaKode: { [sequelize_1.Op.eq]: requestBody.biayaKerjaKode }
            }
        });
        if (biayaKerja === null) {
            const message = 'biaya kerja not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.biayaKerjaNama?.length > 0 && {
                biayaKerjaNama: requestBody.biayaKerjaNama
            })
        };
        await biayaKerja_1.BiayaKerjaModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                biayaKerjaKode: { [sequelize_1.Op.eq]: requestBody.biayaKerjaKode }
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
exports.updateBiayaKerja = updateBiayaKerja;
