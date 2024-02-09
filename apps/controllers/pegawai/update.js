"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePegawai = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const pegawai_1 = require("../../models/pegawai");
const updatePegawai = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['pegawaiKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const pegawai = await pegawai_1.PegawaiModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                pegawaiKode: { [sequelize_1.Op.eq]: requestBody.pegawaiKode }
            }
        });
        if (pegawai === null) {
            const message = 'pegawai not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.pegawaiEmail?.toString().length > 0 && {
                pegawaiEmail: requestBody.pegawaiEmail
            })
        };
        await pegawai_1.PegawaiModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                pegawaiKode: { [sequelize_1.Op.eq]: requestBody.pegawaiKode }
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
exports.updatePegawai = updatePegawai;
