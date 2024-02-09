"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectLainController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectLainController = {
    create: create_1.createProjectLain,
    findAll: find_1.findAllProjectLain,
    findDetail: find_1.findDetailProjectLain,
    remove: remove_1.removeProjectBahanLain,
    update: update_1.updateProjectLain
};
