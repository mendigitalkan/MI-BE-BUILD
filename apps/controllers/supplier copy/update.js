"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSupplier = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const supplier_1 = require("../../models/supplier");
const updateSupplier = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['supplierKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const supplier = await supplier_1.SupplierModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                supplierKode: { [sequelize_1.Op.eq]: requestBody.supplierKode }
            }
        });
        if (supplier === null) {
            const message = 'supplier not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.supplierEmail?.toString().length > 0 && {
                supplierEmail: requestBody.supplierEmail
            })
        };
        await supplier_1.SupplierModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                supplierKode: { [sequelize_1.Op.eq]: requestBody.supplierKode }
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
exports.updateSupplier = updateSupplier;
