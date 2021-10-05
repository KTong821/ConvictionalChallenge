"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRouter = void 0;
const express_1 = require("express");
class StoreRouter {
    static using(getStoreInventoryController) {
        const productRouter = (0, express_1.Router)();
        productRouter.get("/inventory", (req, res) => {
            getStoreInventoryController.execute(req, res);
        });
        return productRouter;
    }
}
exports.StoreRouter = StoreRouter;
