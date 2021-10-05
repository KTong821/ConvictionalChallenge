"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUseCases = void 0;
const application_1 = require("../../modules/product/application");
const application_2 = require("../../modules/store/application");
const setupUseCases = (repos) => {
    return {
        getAllProducts: new application_1.GetAllProductsUseCase(repos.product),
        getProductById: new application_1.GetProductByIdUseCase(repos.product),
        getStoreInventory: new application_2.GetStoreInventoryUseCase(repos.product),
    };
};
exports.setupUseCases = setupUseCases;
