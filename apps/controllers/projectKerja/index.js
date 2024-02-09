"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectKerjaController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectKerjaController = {
    create: create_1.createProjectKerja,
    findAll: find_1.findAllProjectKerja,
    findDetail: find_1.findDetailProjectKerja,
    remove: remove_1.removeProjectKerja,
    update: update_1.updateProjectKerja
};
