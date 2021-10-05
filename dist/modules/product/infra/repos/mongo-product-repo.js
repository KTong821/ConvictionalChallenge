"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoProductRepo = void 0;
const mapper_1 = require("../../entities/mapper");
const mongo_data_1 = require("../../../../setup/database/mongo-data");
const shared_1 = require("../../../../shared");
class MongoProductRepo {
    //TODO constructor consuming MongoDB Model as property Project
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            // try/catch
            // data = await Product.find()
            const products = mongo_data_1.data.map((productEntity) => mapper_1.ProductMap.toDomain(productEntity));
            return shared_1.Result.ok(products);
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // try/catch
            // data = await Product.findById()
            const productEntity = mongo_data_1.data.find((productEntity) => `${productEntity.id}` == id);
            console.log("here1");
            if (productEntity == undefined) {
                console.log("here");
                return shared_1.Result.err(new shared_1.BaseError("Product not found"));
            }
            const product = mapper_1.ProductMap.toDomain(productEntity);
            return shared_1.Result.ok(product);
        });
    }
    getStoreInventory() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.getAllProducts();
            if (products.isOk()) {
                const inventories = products.value.map((product) => product.variants.map((variant) => {
                    return {
                        productId: product.code,
                        variantId: variant.id,
                        stock: variant.inventory_quantity,
                    };
                })).flat();
                return shared_1.Result.ok(inventories);
            }
            else {
                return shared_1.Result.err(new shared_1.BaseError("Something failed."));
            }
        });
    }
}
exports.MongoProductRepo = MongoProductRepo;
