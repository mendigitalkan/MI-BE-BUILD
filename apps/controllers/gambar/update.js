"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGambar = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectGambar_1 = require("../../models/projectGambar");
const updateGambar = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['gambarKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const gambar = await projectGambar_1.GambarModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                gambarKode: { [sequelize_1.Op.eq]: requestBody.gambarKode }
            }
        });
        if (gambar === null) {
            const message = 'gambar not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.gambarUrl?.length > 0 && {
                gambarUrl: requestBody.gambarUrl
            }),
            ...(requestBody.gambarProjectKerjaKode?.length > 0 && {
                gambarProjectKerjaKode: requestBody.gambarProjectKerjaKode
            })
        };
        await projectGambar_1.GambarModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                gambarKode: { [sequelize_1.Op.eq]: requestBody.gambarKode }
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
exports.updateGambar = updateGambar;
