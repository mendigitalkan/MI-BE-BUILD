"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGambar = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const projectGambar_1 = require("../../models/projectGambar");
const updateGambar = async (req, res) => {
    const requestBody = req.body;
    try {
        await projectGambar_1.ProjectGambarModel.destroy({
            where: {
                projectGambarProjectKerjaKode: {
                    [sequelize_1.Op.eq]: requestBody[0].projectGambarProjectKerjaKode
                }
            }
        });
        await projectGambar_1.ProjectGambarModel.bulkCreate(requestBody);
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
