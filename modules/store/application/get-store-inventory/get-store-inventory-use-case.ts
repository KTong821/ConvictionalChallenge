import { InventoryMap } from "./../../entities/mapper";
import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { InventoryDTO } from "../../entities/inventory";
import { ProductRepo } from "../../../product/infra/repos/product-repo";

type GetStoreInventoryResponse = Result<Array<InventoryDTO>, BaseError>;

export class GetStoreInventoryUseCase
  implements BaseUseCase<GetStoreInventoryResponse>
{
  private productRepo: ProductRepo;

  constructor(productRepo: ProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(): Promise<GetStoreInventoryResponse> {
    const result = await this.productRepo.getStoreInventory();
    if (result.isOk()) {
      const productDTOs: Array<InventoryDTO> = result.value.map((product) =>
        InventoryMap.toDTO(product)
      );
      return Result.ok(productDTOs);
    } else {
      return result;
    }
  }
}
