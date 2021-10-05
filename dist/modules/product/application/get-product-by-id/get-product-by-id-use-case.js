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
exports.GetProductByIdUseCase = void 0;
const mapper_1 = require("./../../entities/mapper");
const shared_1 = require("../../../../shared");
// Domain logic for fetching product by id
class GetProductByIdUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id.length != 10) {
                return shared_1.Result.err(new shared_1.BaseError("Invalid ID"));
            }
            const result = yield this.productRepo.getProductById(id);
            if (result.isOk()) {
                const productDTO = mapper_1.ProductMap.toDTO(result.value);
                return shared_1.Result.ok(productDTO);
            }
            else {
                return result;
            }
        });
    }
}
exports.GetProductByIdUseCase = GetProductByIdUseCase;
