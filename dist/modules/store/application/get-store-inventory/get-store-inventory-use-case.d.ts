import { BaseUseCase, Result, BaseError } from "../../../../shared";
import { InventoryDTO } from "../../entities/inventory";
import { ProductRepo } from "../../../product/infra/repos/product-repo";
declare type GetStoreInventoryResponse = Result<Array<InventoryDTO>, BaseError>;
export declare class GetStoreInventoryUseCase implements BaseUseCase<GetStoreInventoryResponse> {
    private productRepo;
    constructor(productRepo: ProductRepo);
    execute(): Promise<GetStoreInventoryResponse>;
}
export {};
