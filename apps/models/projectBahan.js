"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectBahanModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.ProjectBahanModel = _1.sequelize.define('project_bahan', {
    ...zygote_1.ZygoteModel,
    projectBahanKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    projectBahanProjectKerjaKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    projectBahanKodeBahan: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    projectBahanKodeWarna: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectBahanPanjang: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    projectBahanLebar: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    projectBahanLuasBidang: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    projectBahanQty: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    projectBahanStatus: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
    },
    projectBahanRevisi: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    projectBahanUserRevisi: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectBahanPotonganType: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    projectBahanKet1: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    projectBahanKet2: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'project_bahan',
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
