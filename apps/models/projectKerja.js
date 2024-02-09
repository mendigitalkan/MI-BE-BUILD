"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectKerjaModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.ProjectKerjaModel = _1.sequelize.define('project_kerja', {
    ...zygote_1.ZygoteModel,
    projectKerjaKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectKerjaCustomer: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectKerjaCustomerNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    projectKerjaTglInput: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    projectKerjaTglApprove: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    projectKerjaDeadline: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectKerjaPinalti: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectKerjaSales: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectKerjaNilaiProject: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectKerjaStatus: {
        type: sequelize_1.DataTypes.ENUM('NEW', 'APP', 'PRG', 'FNH'),
        allowNull: true,
        defaultValue: 'NEW'
    },
    projectKerjaApproval: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true
    },
    projectKerjaKetProses: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    projectKerjaKet1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectKerjaKet2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    projectKerjaDisc: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectKerjaImages: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'project_kerja',
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
