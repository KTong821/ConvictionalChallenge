"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
class ProductRouter {
    static using(getAllProductsController, getProductByIdController) {
        const productRouter = (0, express_1.Router)();
        productRouter.get("/", (req, res) => {
            getAllProductsController.execute(req, res);
        });
        productRouter.get("/:id", (req, res) => {
            getProductByIdController.execute(req, res);
        });
        return productRouter;
    }
}
exports.ProductRouter = ProductRouter;
