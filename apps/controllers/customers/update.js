"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomer = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const sequelize_1 = require("sequelize");
const customers_1 = require("../../models/customers");
const updateCustomer = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['customerKode'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const customer = await customers_1.CustomersModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                customerKode: { [sequelize_1.Op.eq]: requestBody.customerKode }
            }
        });
        if (customer === null) {
            const message = 'customer not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        const newData = {
            ...(requestBody.customerEmail?.length > 0 && {
                customerEmail: requestBody.customerEmail
            }),
            ...(requestBody.customerNama?.length > 0 && {
                customerNama: requestBody.customerNama
            }),
            ...(requestBody.customerAlamat?.length > 0 && {
                customerAlamat: requestBody.customerAlamat
            }),
            ...(requestBody.customerKota?.length > 0 && {
                customerKota: requestBody.customerKota
            }),
            ...(requestBody.customerKontakPerson?.length > 0 && {
                customerKontakPerson: requestBody.customerKontakPerson
            }),
            ...(requestBody.customerEmail?.length > 0 && {
                customerEmail: requestBody.customerEmail
            }),
            ...(requestBody.customerTelp1?.length > 0 && {
                customerTelp1: requestBody.customerTelp1
            }),
            ...(requestBody.customerTelp2?.length > 0 && {
                customerTelp2: requestBody.customerTelp2
            }),
            ...(requestBody.customerHp1?.length > 0 && {
                customerHp1: requestBody.customerHp1
            }),
            ...(requestBody.customerHp2?.length > 0 && {
                customerHp2: requestBody.customerHp2
            }),
            ...(requestBody.customerStatus?.length > 0 && {
                customerStatus: requestBody.customerStatus
            }),
            ...(requestBody.customerSales?.length > 0 && {
                customerSales: requestBody.customerSales
            }),
            ...(requestBody.customerKet1?.length > 0 && {
                customerKet1: requestBody.customerKet1
            })
        };
        await customers_1.CustomersModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                customerKode: { [sequelize_1.Op.eq]: requestBody.customerKode }
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
exports.updateCustomer = updateCustomer;
