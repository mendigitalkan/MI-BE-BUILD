"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pegawaiController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.pegawaiController = {
    create: create_1.createPegawai,
    findAll: find_1.findAllPegawai,
    findDetail: find_1.findDetailPegawai,
    remove: remove_1.removePegawai,
    update: update_1.updatePegawai
};
