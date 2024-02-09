"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBahan = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const bahan_1 = require("../../models/bahan");
const updateBahan = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['bahanKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const bahan = await bahan_1.BahanModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                bahanKode: { [sequelize_1.Op.eq]: requestBody.bahanKode }
            }
        });
        if (bahan === null) {
            const message = 'bahan not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.bahanNama?.length > 0 && {
                bahanNama: requestBody.bahanNama
            })
        };
        await bahan_1.BahanModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                bahanKode: { [sequelize_1.Op.eq]: requestBody.bahanKode }
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
exports.updateBahan = updateBahan;
