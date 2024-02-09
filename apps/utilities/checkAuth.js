"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuperAdmin = void 0;
const sequelize_1 = require("sequelize");
const admin_1 = require("../models/admin");
const isSuperAdmin = async ({ adminId }) => {
    const checkAdmin = await admin_1.AdminModel.findOne({
        raw: true,
        where: {
            deleted: { [sequelize_1.Op.eq]: 0 },
            adminId: { [sequelize_1.Op.eq]: adminId },
            adminRole: { [sequelize_1.Op.eq]: 'superAdmin' }
        }
    });
    return checkAdmin != null;
};
exports.isSuperAdmin = isSuperAdmin;
