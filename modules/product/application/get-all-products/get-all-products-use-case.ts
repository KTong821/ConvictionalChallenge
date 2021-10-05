import { ProductMap } from './../../entities/mapper';
import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { ProductRepo } from "../../infra/repos/product-repo";
import { ProductDTO } from "../../entities/product";

type GetAllProductsResponse = Result<Array<ProductDTO>, BaseError>;

//Domain logic for fetching all products
export class GetAllProductsUseCase
  implements BaseUseCase<GetAllProductsResponse>
{
  private productRepo: ProductRepo;

  constructor(productRepo: ProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(): Promise<GetAllProductsResponse> {
    const result = await this.productRepo.getAllProducts();
    if (result.isOk()) {
      const productDTOs: Array<ProductDTO> = result.value.map((product) => ProductMap.toDTO(product));
      return Result.ok(productDTOs);
    } else {
      return result;
    }
  }
}
