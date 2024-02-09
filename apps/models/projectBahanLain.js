"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectBahanLainModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.ProjectBahanLainModel = _1.sequelize.define('project_bahan_lain', {
    ...zygote_1.ZygoteModel,
    projectBahanLainKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectBahanLainProjectKerjaKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    projectBahanLainNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    projectBahanLainQty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    projectBahanLainHarga: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    projectBahanLainStatus: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
    },
    projectBahanLainRevisi: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectBahanLainUserRevisi: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectBahanLainKet1: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    projectBahanLainKet2: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'project_bahan_lain',
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
