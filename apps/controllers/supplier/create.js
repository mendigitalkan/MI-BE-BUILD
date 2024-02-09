"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupplier = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const generateId_1 = require("../../utilities/generateId");
const supplier_1 = require("../../models/supplier");
const createSupplier = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: [
            'supplierAlamat',
            'supplierKota',
            'supplierKontakPerson',
            'supplierEmail',
            'supplierTelp1',
            'supplierTelp2',
            'supplierHp1',
            'supplierHp2'
        ],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        requestBody.supplierKode = (0, generateId_1.generateUniqueId)();
        await supplier_1.SupplierModel.create(requestBody);
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
exports.createSupplier = createSupplier;
