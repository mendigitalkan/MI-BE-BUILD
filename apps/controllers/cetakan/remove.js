"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCetakan = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const cetakan_1 = require("../../models/cetakan");
const removeCetakan = async (req, res) => {
    const requestQuery = req.query;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['cetakanKode'],
        requestData: requestQuery
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const cetakan = await cetakan_1.CetakanModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                cetakanKode: { [sequelize_1.Op.eq]: requestQuery.cetakanKode }
            }
        });
        if (cetakan == null) {
            const message = 'cetakan not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        cetakan.deleted = 1;
        void cetakan.save();
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.removeCetakan = removeCetakan;
