"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectKerja = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const projectKerja_1 = require("../../models/projectKerja");
const updateProjectKerja = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['projectKerjaKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const projectKerja = await projectKerja_1.ProjectKerjaModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectKerjaKode: { [sequelize_1.Op.eq]: requestBody.projectKerjaKode }
            }
        });
        if (projectKerja === null) {
            const message = 'project kerja not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.projectKerjaCustomer?.toString().length > 0 && {
                projectKerjaCustomer: requestBody.projectKerjaCustomer
            }),
            ...(requestBody.projectKerjaCustomerNama?.toString().length > 0 && {
                projectKerjaCustomerNama: requestBody.projectKerjaCustomerNama
            }),
            ...(requestBody.projectKerjaTglInput?.toString().length > 0 && {
                projectKerjaTglInput: requestBody.projectKerjaTglInput
            }),
            ...(requestBody.projectKerjaTglApprove?.toString().length > 0 && {
                projectKerjaTglApprove: requestBody.projectKerjaTglApprove
            }),
            ...(requestBody.projectKerjaDeadline?.toString().length > 0 && {
                projectKerjaDeadline: requestBody.projectKerjaDeadline
            }),
            ...(requestBody.projectKerjaPinalti?.toString().length > 0 && {
                projectKerjaPinalti: requestBody.projectKerjaPinalti
            }),
            ...(requestBody.projectKerjaSales?.toString().length > 0 && {
                projectKerjaSales: requestBody.projectKerjaSales
            }),
            ...(requestBody.projectKerjaNilaiProject?.toString().length > 0 && {
                projectKerjaNilaiProject: requestBody.projectKerjaNilaiProject
            }),
            ...(requestBody.projectKerjaStatus?.toString().length > 0 && {
                projectKerjaStatus: requestBody.projectKerjaStatus
            }),
            ...(requestBody.projectKerjaApproval?.toString().length > 0 && {
                projectKerjaApproval: requestBody.projectKerjaApproval
            }),
            ...(requestBody.projectKerjaKetProses?.toString().length > 0 && {
                projectKerjaKetProses: requestBody.projectKerjaKetProses
            }),
            ...(requestBody.projectKerjaKet1?.toString().length > 0 && {
                projectKerjaKet1: requestBody.projectKerjaKet1
            }),
            ...(requestBody.projectKerjaKet2?.toString().length > 0 && {
                projectKerjaKet2: requestBody.projectKerjaKet2
            }),
            ...(requestBody.projectKerjaDisc?.toString().length > 0 && {
                projectKerjaDisc: requestBody.projectKerjaDisc
            }),
            ...(requestBody.projectKerjaImages?.toString().length > 0 && {
                projectKerjaImages: requestBody.projectKerjaImages
            })
        };
        await projectKerja_1.ProjectKerjaModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                projectKerjaKode: { [sequelize_1.Op.eq]: requestBody.projectKerjaKode }
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
exports.updateProjectKerja = updateProjectKerja;
