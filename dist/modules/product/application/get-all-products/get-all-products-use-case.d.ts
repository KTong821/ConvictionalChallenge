import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { ProductRepo } from "../../infra/repos/product-repo";
import { ProductDTO } from "../../entities/product";
declare type GetAllProductsResponse = Result<Array<ProductDTO>, BaseError>;
export declare class GetAllProductsUseCase implements BaseUseCase<GetAllProductsResponse> {
    private productRepo;
    constructor(productRepo: ProductRepo);
    execute(): Promise<GetAllProductsResponse>;
}
export {};
