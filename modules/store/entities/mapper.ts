import { Inventory, InventoryDTO } from "./inventory";

// Maps inventory domain object to DTO
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
