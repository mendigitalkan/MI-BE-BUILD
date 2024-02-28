"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cetakanController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.cetakanController = {
    create: create_1.createCetakan,
    findAll: find_1.findAllCetakan,
    findDetail: find_1.findDetailCetakan,
    remove: remove_1.removeCetakan,
    update: update_1.updateCetakan
};
