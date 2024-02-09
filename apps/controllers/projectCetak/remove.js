"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProjectCetak = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const projectCetak_1 = require("../../models/projectCetak");
const removeProjectCetak = async (req, res) => {
    const requestQuery = req.query;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectCetakKode'],
        requestData: requestQuery
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
                projectCetakKode: { [sequelize_1.Op.eq]: requestQuery.projectCetakKode }
            }
        });
        if (projectCetak == null) {
            const message = 'project cetak not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        projectCetak.deleted = 1;
        void projectCetak.save();
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
exports.removeProjectCetak = removeProjectCetak;
