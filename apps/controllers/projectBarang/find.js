"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailProjectBarang = exports.findAllProjectProjectBarang = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestCheker_1 = require("../../utilities/requestCheker");
const projectBarang_1 = require("../../models/projectBarang");
const findAllProjectProjectBarang = async (req, res) => {
    try {
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const result = await projectBarang_1.ProjectBarangModel.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                ...(Boolean(req.query.search) && {
                    [sequelize_1.Op.or]: [{ projectBarangNama: { [sequelize_1.Op.like]: `%${req.query.search}%` } }]
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
exports.findAllProjectProjectBarang = findAllProjectProjectBarang;
const findDetailProjectBarang = async (req, res) => {
    const requestParams = req.params;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectBarangKodeProject'],
        requestData: requestParams
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectBarang = await projectBarang_1.ProjectBarangModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBarangKodeProject: { [sequelize_1.Op.eq]: requestParams.projectBarangKodeProject }
            }
        });
        if (projectBarang === null) {
            const message = 'project barang not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = projectBarang;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findDetailProjectBarang = findDetailProjectBarang;
