import express from "express";
import { BaseController } from "../../../../shared";
import { GetProductByIdUseCase } from "./get-product-by-id-use-case";

// Request handler for fetching product by id
export class GetProductByIdController extends BaseController {
  constructor(protected useCase: GetProductByIdUseCase) {
    super();
  }

  async execute<Res extends express.Response>(
    req: express.Request,
    res: Res
  ): Promise<Res> {
    const result = await this.useCase.execute(req.params.id);
    if (result.isOk()) {
      return this.ok(res, result.value);
    } else {
      return this.fail(res, result.error.message);
    }
  }
}
