import express from 'express';
import { BaseController } from "../../../../shared";
import { GetAllProductsUseCase } from './get-all-products-use-case';
export declare class GetAllProductsController extends BaseController {
    protected useCase: GetAllProductsUseCase;
    constructor(useCase: GetAllProductsUseCase);
    execute<Res extends express.Response>(_req: express.Request, res: Res): Promise<Res>;
}
