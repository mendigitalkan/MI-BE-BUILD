"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCetakController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectCetakController = {
    create: create_1.createProjectCetak,
    findAll: find_1.findAllProjectCetak,
    findDetail: find_1.findDetailProjectCetak,
    remove: remove_1.removeProjectCetak,
    update: update_1.updateProjectCetak
};
