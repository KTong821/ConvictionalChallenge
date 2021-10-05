import { GetProductByIdController } from "./../../application/get-product-by-id/get-product-by-id-controller";
import { GetAllProductsController } from "../../application/get-all-products/get-all-products-controller";
import { Router } from "express";

class ProductRouter {
  static using(
    getAllProductsController: GetAllProductsController,
    getProductByIdController: GetProductByIdController
  ): Router {
    const productRouter = Router();
    productRouter.get("/", (req, res) => {
      getAllProductsController.execute(req, res);
    });
    productRouter.get("/:id", (req, res) => {
      getProductByIdController.execute(req, res);
    });
    return productRouter;
  }
}

export { ProductRouter };
