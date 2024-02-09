"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.supplierController = {
    create: create_1.createSupplier,
    findAll: find_1.findAllSupplier,
    findDetail: find_1.findDetailSupplier,
    remove: remove_1.removeSupplier,
    update: update_1.updateSupplier
};
