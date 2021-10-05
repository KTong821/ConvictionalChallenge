import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { ProductRepo } from "../../infra/repos/product-repo";
import { ProductDTO } from "../../entities/product";
declare type GetProductByIdResponse = Result<ProductDTO, BaseError>;
export declare class GetProductByIdUseCase implements BaseUseCase<GetProductByIdResponse> {
    private productRepo;
    constructor(productRepo: ProductRepo);
    execute(id: string): Promise<GetProductByIdResponse>;
}
export {};
