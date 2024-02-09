"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.SupplierModel = _1.sequelize.define('supplier', {
    ...zygote_1.ZygoteModel,
    supplierKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    supplierAlamat: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierKota: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierKontakPerson: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierEmail: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierTelp1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierTelp2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierHp1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    supplierHp2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'supplier',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB',
    hooks: {
        beforeCreate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.createdAt = now;
            record.updatedAt = null;
        },
        beforeUpdate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.updatedAt = now;
        }
    }
});
