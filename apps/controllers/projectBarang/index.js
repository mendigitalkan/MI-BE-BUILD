"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectBarangController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectBarangController = {
    create: create_1.createProjectBarang,
    findAll: find_1.findAllProjectProjectBarang,
    findDetail: find_1.findDetailProjectBarang,
    remove: remove_1.removeProjectBarang,
    update: update_1.updateProjectBarang
};
