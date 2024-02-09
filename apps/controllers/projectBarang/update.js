"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectBarang = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectBarang_1 = require("../../models/projectBarang");
const updateProjectBarang = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectBarangKodeProject'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectBahan = await projectBarang_1.ProjectBarangModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBarangKodeProject: { [sequelize_1.Op.eq]: requestBody.projectBarangKodeProject }
            }
        });
        if (projectBahan === null) {
            const message = 'project barang not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.projectBarangBrgProject?.length > 0 && {
                projectBarangBrgProject: requestBody.projectBarangBrgProject
            }),
            ...(requestBody.projectBarangNama?.length > 0 && {
                projectBarangNama: requestBody.projectBarangNama
            }),
            ...(requestBody.projectBarangQty?.length > 0 && {
                projectBarangQty: requestBody.projectBarangQty
            }),
            ...(requestBody.projectBarangTipe?.length > 0 && {
                projectBarangTipe: requestBody.projectBarangTipe
            }),
            ...(requestBody.projectBarangStatus?.length > 0 && {
                projectBarangStatus: requestBody.projectBarangStatus
            }),
            ...(requestBody.projectBarangKetProgres?.length > 0 && {
                projectBarangKetProgres: requestBody.projectBarangKetProgres
            }),
            ...(requestBody.projectBarangTglApp?.length > 0 && {
                projectBarangTglApp: requestBody.projectBarangTglApp
            }),
            ...(requestBody.projectBarangNilaiHpp?.length > 0 && {
                projectBarangNilaiHpp: requestBody.projectBarangNilaiHpp
            }),
            ...(requestBody.projectBarangDisc?.length > 0 && {
                projectBarangDisc: requestBody.projectBarangDisc
            }),
            ...(requestBody.projectBarangKetProses?.length > 0 && {
                projectBarangKetProses: requestBody.projectBarangKetProses
            }),
            ...(requestBody.projectBarangKet1?.length > 0 && {
                projectBarangKet1: requestBody.projectBarangKet1
            }),
            ...(requestBody.projectBarangKet2?.length > 0 && {
                projectBarangKet2: requestBody.projectBarangKet2
            })
        };
        await projectBarang_1.ProjectBarangModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectBarangKodeProject: { [sequelize_1.Op.eq]: requestBody.projectBarangKodeProject }
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
exports.updateProjectBarang = updateProjectBarang;
