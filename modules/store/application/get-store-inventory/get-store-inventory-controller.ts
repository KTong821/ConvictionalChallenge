import express from "express";
import { BaseController } from "../../../../shared";
import { GetStoreInventoryUseCase } from "./get-store-inventory-use-case";

export class GetStoreInventoryController extends BaseController {
  constructor(protected useCase: GetStoreInventoryUseCase) {
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
