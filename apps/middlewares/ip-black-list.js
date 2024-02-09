"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipBlackList = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utilities/response");
const configs_1 = require("../configs");
const ipBlackList = async (req, res, next) => {
    try {
        if (configs_1.CONFIG.ipBlackList.indexOf(req.ip) > -1) {
            const message = 'access denied';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(response);
        }
        next();
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.ipBlackList = ipBlackList;
