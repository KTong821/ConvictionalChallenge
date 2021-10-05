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
exports.GetStoreInventoryUseCase = void 0;
const mapper_1 = require("./../../entities/mapper");
const shared_1 = require("../../../../shared");
class GetStoreInventoryUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.getStoreInventory();
            if (result.isOk()) {
                const productDTOs = result.value.map((product) => mapper_1.InventoryMap.toDTO(product));
                return shared_1.Result.ok(productDTOs);
            }
            else {
                return result;
            }
        });
    }
}
exports.GetStoreInventoryUseCase = GetStoreInventoryUseCase;
