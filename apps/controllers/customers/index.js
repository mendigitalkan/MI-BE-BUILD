"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.customerController = {
    create: create_1.createCustomer,
    findAll: find_1.findAllCustomer,
    findDetail: find_1.findDetailCustomer,
    remove: remove_1.removeCustomer,
    update: update_1.updateCustomer
};
