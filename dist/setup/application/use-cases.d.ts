import { GetAllProductsUseCase, GetProductByIdUseCase } from "../../modules/product/application";
import { GetStoreInventoryUseCase } from "../../modules/store/application";
import { Repos } from "../database";
export interface UseCases {
    getAllProducts: GetAllProductsUseCase;
    getProductById: GetProductByIdUseCase;
    getStoreInventory: GetStoreInventoryUseCase;
}
export declare const setupUseCases: (repos: Repos) => UseCases;
