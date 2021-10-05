import express from 'express'
import { BaseController } from "../../../../shared"
import { GetAllProductsUseCase } from './get-all-products-use-case'

// Request handler for fetching all products
export class GetAllProductsController extends BaseController {
  constructor(protected useCase: GetAllProductsUseCase) {
    super();
  }

  async execute<Res extends express.Response>(
    _req: express.Request,
    res: Res
  ): Promise<Res> {
    const result = await this.useCase.execute();
    if (result.isOk()) {
      return this.ok(res, result.value);
    } else {
      return this.fail(res, result.error.message);
    }
  }
}
