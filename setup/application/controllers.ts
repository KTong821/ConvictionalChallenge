import { UseCases } from "./use-cases";
import {
  GetAllProductsController,
  GetProductByIdController,
} from "../../modules/product/application";
import { GetStoreInventoryController } from "../../modules/store/application";

export interface Controllers {
  getProducts: GetAllProductsController;
  getProductById: GetProductByIdController;
  getStoreInventory: GetStoreInventoryController
}

export const setupControllers = (useCases: UseCases): Controllers => {
  return {
    getProducts: new GetAllProductsController(useCases.getAllProducts),
    getProductById: new GetProductByIdController(useCases.getProductById),
    getStoreInventory: new GetStoreInventoryController(useCases.getStoreInventory)
  };
};
