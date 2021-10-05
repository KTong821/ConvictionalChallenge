import { Product } from "../../entities/product";
import { ProductRepo } from "./product-repo";
import { Result, BaseError } from "../../../../shared";
import { Inventory } from "../../../store/entities/inventory";
export declare class MongoProductRepo implements ProductRepo {
    getAllProducts(): Promise<Result<Array<Product>, BaseError>>;
    getProductById(id: string): Promise<Result<Product, BaseError>>;
    getStoreInventory(): Promise<Result<Inventory[], BaseError>>;
}
