"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.CustomersModel = _1.sequelize.define('customers', {
    ...zygote_1.ZygoteModel,
    customerKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    customerNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerAlamat: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerKota: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerKontakPerson: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerEmail: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerTelp1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerTelp2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerHp1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerHp2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerStatus: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerSales: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    customerKet1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'customers',
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
