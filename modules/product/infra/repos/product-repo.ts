import { Product } from "../../entities/product";
import { Result, BaseError } from "../../../../shared";
import { Inventory } from "../../../store/entities/inventory";

export abstract class ProductRepo {
  abstract getAllProducts(): Promise<Result<Array<Product>, BaseError>>;

  abstract getProductById(id: string): Promise<Result<Product, BaseError>>;

  abstract getStoreInventory(): Promise<Result<Array<Inventory>, BaseError>>;
}
