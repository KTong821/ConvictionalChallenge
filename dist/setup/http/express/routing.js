"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerSetup = void 0;
const express_1 = __importDefault(require("express"));
const product_router_1 = require("../../../modules/product/infra/routes/product-router");
const store_router_1 = require("../../../modules/store/infra/routes/store-router");
const routerSetup = (controllers) => {
    const endpointRouters = {
        products: product_router_1.ProductRouter.using(controllers.getProducts, controllers.getProductById),
        store: store_router_1.StoreRouter.using(controllers.getStoreInventory),
    };
    const router = express_1.default.Router();
    router.use("/products", endpointRouters.products);
    router.use('/store', endpointRouters.store);
    return router;
};
exports.routerSetup = routerSetup;
