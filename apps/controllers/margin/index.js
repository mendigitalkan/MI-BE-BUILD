"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.marginController = {
    create: create_1.createmargin,
    findAll: find_1.findAllMargin,
    findDetail: find_1.findDetailMargin,
    remove: remove_1.removeMargin,
    update: update_1.updatemargin
};
