"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectBahanController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectBahanController = {
    create: create_1.createProjectBahan,
    findAll: find_1.findAllProjectBahan,
    findDetail: find_1.findDetailProjectBahan,
    remove: remove_1.removeProjectBahan,
    update: update_1.updateProjectBahan
};
