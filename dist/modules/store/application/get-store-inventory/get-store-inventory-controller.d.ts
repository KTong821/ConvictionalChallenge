import express from "express";
import { BaseController } from "../../../../shared";
import { GetStoreInventoryUseCase } from "./get-store-inventory-use-case";
export declare class GetStoreInventoryController extends BaseController {
    protected useCase: GetStoreInventoryUseCase;
    constructor(useCase: GetStoreInventoryUseCase);
    execute<Res extends express.Response>(_req: express.Request, res: Res): Promise<Res>;
}
