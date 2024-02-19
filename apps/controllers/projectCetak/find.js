"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailProjectCetak = exports.findAllProjectCetak = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestCheker_1 = require("../../utilities/requestCheker");
const projectCetak_1 = require("../../models/projectCetak");
const findAllProjectCetak = async (req, res) => {
    try {
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const result = await projectCetak_1.ProjectCetakModel.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                ...(Boolean(req.query.search) && {
                    [sequelize_1.Op.or]: [{ supplierEmail: { [sequelize_1.Op.like]: `%${req.query.search}%` } }]
                }),
                ...(Boolean(req.query.projectKerjaKode) && {
                    projectCetakProjectKerjaKode: {
                        [sequelize_1.Op.eq]: req.query.projectKerjaKode
                    }
                })
            },
            order: [['id', 'desc']],
            ...(req.query.pagination === 'true' && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.default;
        response.data = page.data(result);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findAllProjectCetak = findAllProjectCetak;
const findDetailProjectCetak = async (req, res) => {
    const requestParams = req.params;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectCetakKode'],
        requestData: requestParams
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
                projectCetakKode: { [sequelize_1.Op.eq]: requestParams.projectCetakKode }
            }
        });
        if (projectCetak === null) {
            const message = 'project cetak not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = projectCetak;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findDetailProjectCetak = findDetailProjectCetak;
