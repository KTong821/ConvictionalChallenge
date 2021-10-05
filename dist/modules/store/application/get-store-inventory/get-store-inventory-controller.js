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
exports.GetStoreInventoryController = void 0;
const shared_1 = require("../../../../shared");
class GetStoreInventoryController extends shared_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    execute(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.useCase.execute();
            if (result.isOk()) {
                return this.ok(res, result.value);
            }
            else {
                return this.fail(res, result.error.message);
            }
        });
    }
}
exports.GetStoreInventoryController = GetStoreInventoryController;
