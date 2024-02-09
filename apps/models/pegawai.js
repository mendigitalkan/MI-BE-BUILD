"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.PegawaiModel = _1.sequelize.define('pegawai', {
    ...zygote_1.ZygoteModel,
    pegawaiKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    pegawaiNama: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiAlamat: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiHp1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiHp2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiEmail: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiNoKtp: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiPangkat: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiTglKerja: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiKet1: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiKet2: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    pegawaiJabatan: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'pegawai',
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
