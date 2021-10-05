import { ProductMap } from "./../../entities/mapper";
import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { ProductRepo } from "../../infra/repos/product-repo";
import { ProductDTO } from "../../entities/product";

type GetProductByIdResponse = Result<ProductDTO, BaseError>;

// Domain logic for fetching product by id
export class GetProductByIdUseCase
  implements BaseUseCase<GetProductByIdResponse>
{
  private productRepo: ProductRepo;

  constructor(productRepo: ProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(id: string): Promise<GetProductByIdResponse> {
    if (id.length != 10) {
      return Result.err(new BaseError("Invalid ID"));
    }

    const result = await this.productRepo.getProductById(id);
    if (result.isOk()) {
      const productDTO = ProductMap.toDTO(result.value);
      return Result.ok(productDTO);
    } else {
      return result;
    }
  }
}
