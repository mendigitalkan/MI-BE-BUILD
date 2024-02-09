"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCetakModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.ProjectCetakModel = _1.sequelize.define('project_cetak', {
    ...zygote_1.ZygoteModel,
    projectCetakKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    projectCetakProjectKerjaKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    projectCetakKodeCetak: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectCetakPanjang: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    projectCetakLebar: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    projectCetakQty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    projectCetakStatus: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
    },
    projectCetakRevisi: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectCetakUserRevisi: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectCetakKet1: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    projectCetakKet2: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'project_cetak',
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
