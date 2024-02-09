"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GambarModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.GambarModel = _1.sequelize.define('gambar', {
    ...zygote_1.ZygoteModel,
    gambarKode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    gambarBrgProject: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    gambarNamaFile: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    gambarKet1: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    gambarKet2: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'gambar',
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
