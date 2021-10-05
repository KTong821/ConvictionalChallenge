import { UseCases } from "./use-cases";
import { GetAllProductsController, GetProductByIdController } from "../../modules/product/application";
import { GetStoreInventoryController } from "../../modules/store/application";
export interface Controllers {
    getProducts: GetAllProductsController;
    getProductById: GetProductByIdController;
    getStoreInventory: GetStoreInventoryController;
}
export declare const setupControllers: (useCases: UseCases) => Controllers;
