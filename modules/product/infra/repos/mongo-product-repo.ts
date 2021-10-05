import { Variant } from "./../../entities/variant";
import { Product } from "../../entities/product";
import { ProductRepo } from "./product-repo";
import { ProductMap } from "../../entities/mapper";
import { data } from "../../../../setup/database/mongo-data";
import { Result, BaseError } from "../../../../shared";
import { Inventory } from "../../../store/entities/inventory";

// Mock mongooose capabilities
export class MongoProductRepo implements ProductRepo {
  //TODO constructor consuming MongoDB Model as property Project

  async getAllProducts(): Promise<Result<Array<Product>, BaseError>> {
    // try/catch
    // data = await Product.find()

    const products = data.map(
      (productEntity: any): Product => ProductMap.toDomain(productEntity)
    );
    return Result.ok(products);
  }

  async getProductById(id: string): Promise<Result<Product, BaseError>> {
    // try/catch
    // data = await Product.findById()

    const productEntity = data.find(
      (productEntity: any) => `${productEntity.id}` == id
    );
      console.log("here1")
    if (productEntity == undefined) {
      console.log("here")
      return Result.err(new BaseError("Product not found"));
    }

    const product = ProductMap.toDomain(productEntity);
    return Result.ok(product);
  }

  async getStoreInventory(): Promise<Result<Inventory[], BaseError>> {
    const products = await this.getAllProducts();
    if (products.isOk()) {
      const inventories: Array<Inventory> = products.value.map((product: Product) =>
        product.variants.map((variant: Variant) => {
          return {
            productId: product.code,
            variantId: variant.id,
            stock: variant.inventory_quantity,
          };
        })
      ).flat();
      return Result.ok(inventories)
    } else {
      return Result.err(new BaseError("Something failed."))
    }
  }
}
