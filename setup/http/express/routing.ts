import express from "express";
import { ProductRouter } from "../../../modules/product/infra/routes/product-router";
import { StoreRouter } from "../../../modules/store/infra/routes/store-router";
import { Controllers } from "../../application";

// Router sub-path setup
export const routerSetup = (controllers: Controllers): express.Router => {
  const endpointRouters = {
    products: ProductRouter.using(
      controllers.getProducts,
      controllers.getProductById
    ),
    store: StoreRouter.using(controllers.getStoreInventory),
  };

  const router = express.Router();
  router.use("/products", endpointRouters.products);
  router.use('/store', endpointRouters.store)
  return router;
};
