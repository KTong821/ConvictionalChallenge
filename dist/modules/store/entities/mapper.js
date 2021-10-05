"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMap = void 0;
class InventoryMap {
    static toDTO(inventory) {
        const { productId, variantId, stock } = inventory;
        return {
            productId,
            variantId,
            stock,
        };
    }
}
exports.InventoryMap = InventoryMap;
