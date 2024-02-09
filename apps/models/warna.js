"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarnaModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const bahan_1 = require("./bahan");
exports.WarnaModel = _1.sequelize.define('warna', {
    ...zygote_1.ZygoteModel,
    warnaKode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    warnaKodeBahan: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    warnaNama: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    warnaHarga: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    warnaNilai1: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    warnaNilai2: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    warnaKet1: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    warnaKet2: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'warna',
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
exports.WarnaModel.hasOne(bahan_1.BahanModel, {
    sourceKey: 'warnaKodeBahan',
    foreignKey: 'bahanKode'
});
