import { GetStoreInventoryController } from "./../../application/";
import { Router } from "express";

class StoreRouter {
  static using(
    getStoreInventoryController: GetStoreInventoryController,
  ): Router {
    const productRouter = Router();
    productRouter.get("/inventory", (req, res) => {
      getStoreInventoryController.execute(req, res);
    });
    return productRouter;
  }
}

export { StoreRouter };
