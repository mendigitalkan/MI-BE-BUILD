"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatemargin = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const margins_1 = require("../../models/margins");
const updatemargin = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['marginKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const margin = await margins_1.MarginsModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                marginKode: { [sequelize_1.Op.eq]: requestBody.marginKode }
            }
        });
        if (margin === null) {
            const message = 'margin not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.marginHargaMin?.toString().length > 0 && {
                marginHargaMin: requestBody.marginHargaMin
            })
        };
        await margins_1.MarginsModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                marginKode: { [sequelize_1.Op.eq]: requestBody.marginKode }
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
exports.updatemargin = updatemargin;
