import {
  GetAllProductsUseCase,
  GetProductByIdUseCase,
} from "../../modules/product/application";
import { GetStoreInventoryUseCase } from "../../modules/store/application";
import { Repos } from "../database";

export interface UseCases {
  getAllProducts: GetAllProductsUseCase;
  getProductById: GetProductByIdUseCase;
  getStoreInventory: GetStoreInventoryUseCase;
}

export const setupUseCases = (repos: Repos): UseCases => {
  return {
    getAllProducts: new GetAllProductsUseCase(repos.product),
    getProductById: new GetProductByIdUseCase(repos.product),
    getStoreInventory: new GetStoreInventoryUseCase(repos.product),
  };
};
