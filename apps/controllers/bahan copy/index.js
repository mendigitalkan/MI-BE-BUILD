"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bahanController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.bahanController = {
    create: create_1.createBahan,
    findAll: find_1.findAllBahan,
    findDetail: find_1.findDetailBahan,
    remove: remove_1.removeBahan,
    update: update_1.updateBahan
};
