"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biayaKerjaController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.biayaKerjaController = {
    create: create_1.createBiayaKerja,
    findAll: find_1.findAllBiayaKerja,
    findDetail: find_1.findDetailBiayaKerja,
    remove: remove_1.removeBiayaKerja,
    update: update_1.updateBiayaKerja
};
