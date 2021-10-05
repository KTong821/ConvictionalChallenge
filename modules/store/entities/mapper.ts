import { Inventory, InventoryDTO } from "./inventory";

export class InventoryMap {
  public static toDTO(inventory: Inventory): InventoryDTO {
    const { productId, variantId, stock } = inventory;
    return {
      productId,
      variantId,
      stock,
    };
  }
}
