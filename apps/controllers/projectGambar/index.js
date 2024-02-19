"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectGambarController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.projectGambarController = {
    create: create_1.createGambar,
    findAll: find_1.findAllGambar,
    findDetail: find_1.findDetailGambar,
    remove: remove_1.removeGambar,
    update: update_1.updateGambar
};
