"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectBarangModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.ProjectBarangModel = _1.sequelize.define('project_barang', {
    ...zygote_1.ZygoteModel,
    projectBarangKodeProject: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectBarangProjectKerjaKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    projectBarangBrgProject: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    projectBarangNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    projectBarangQty: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    projectBarangTipe: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    projectBarangStatus: {
        type: sequelize_1.DataTypes.ENUM('N', 'S', 'A'),
        allowNull: true,
        defaultValue: 'N'
    },
    projectBarangKetProgres: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    projectBarangTglApp: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    projectBarangNilaiHpp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectBarangDisc: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    projectBarangKetProses: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    projectBarangKet1: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    projectBarangKet2: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'project_barang',
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
