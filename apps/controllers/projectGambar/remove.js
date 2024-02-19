"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGambar = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const projectGambar_1 = require("../../models/projectGambar");
const removeGambar = async (req, res) => {
    const requestQuery = req.query;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['gambarKode'],
        requestData: requestQuery
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const gambar = await projectGambar_1.ProjectGambarModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectGambarKode: { [sequelize_1.Op.eq]: requestQuery.projectGambarKode }
            }
        });
        if (gambar == null) {
            const message = 'gambar not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        gambar.deleted = 1;
        void gambar.save();
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
exports.removeGambar = removeGambar;
