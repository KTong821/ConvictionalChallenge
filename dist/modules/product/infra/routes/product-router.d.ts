import { GetProductByIdController } from "./../../application/get-product-by-id/get-product-by-id-controller";
import { GetAllProductsController } from "../../application/get-all-products/get-all-products-controller";
import { Router } from "express";
declare class ProductRouter {
    static using(getAllProductsController: GetAllProductsController, getProductByIdController: GetProductByIdController): Router;
}
export { ProductRouter };
