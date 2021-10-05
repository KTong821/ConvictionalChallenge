import express from "express";
import { BaseController } from "../../../../shared";
import { GetProductByIdUseCase } from "./get-product-by-id-use-case";
export declare class GetProductByIdController extends BaseController {
    protected useCase: GetProductByIdUseCase;
    constructor(useCase: GetProductByIdUseCase);
    execute<Res extends express.Response>(req: express.Request, res: Res): Promise<Res>;
}
