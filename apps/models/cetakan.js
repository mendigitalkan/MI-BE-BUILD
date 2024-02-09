"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CetakanModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.CetakanModel = _1.sequelize.define('cetakan', {
    ...zygote_1.ZygoteModel,
    cetakanKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    cetakanNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    cetakanSatuan: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    cetakanHarga: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    cetakanKet1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    cetakanKet2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'cetakan',
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
