"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControllers = void 0;
const application_1 = require("../../modules/product/application");
const application_2 = require("../../modules/store/application");
const setupControllers = (useCases) => {
    return {
        getProducts: new application_1.GetAllProductsController(useCases.getAllProducts),
        getProductById: new application_1.GetProductByIdController(useCases.getProductById),
        getStoreInventory: new application_2.GetStoreInventoryController(useCases.getStoreInventory)
    };
};
exports.setupControllers = setupControllers;
