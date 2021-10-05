"use strict";
// import { Result, BaseError } from './../../../../../shared';
// // import { mocks } from "../../../../../../../test-utils";
// import { ProductDTO } from "../../../entities/product";
// // jest.mock("../../../../infra/repos/implementations/mock-product-repo");
// describe("GetAllProductsController", () => {
// //   const ids: Array<string> = [1, 2, 3].map(String);
// //   const mockProductDTOs: Array<ProductDTO> = ids.map(mocks.mockProductDTO);
// //   const { getAllProductsUseCase, getAllProductsController } = mocks.mockGetAllProducts();
//   test("When executed, the GetAllProductsController returns 200 OK", async () => {
//     jest
//       .spyOn(getAllProductsUseCase, "execute")
//       .mockResolvedValue(Result.ok(mockProductDTOs));
//     const { req, res } = mocks.mockHandlerParams();
//     await getAllProductsController.execute(req, res);
//     expect(res.statusCode).toBe(200);
//     const body = JSON.parse(res._getData());
//     for (const mockProductDTO of mockProductDTOs) {
//       expect(body).toContainEqual(mockProductDTO);
//     }
//   });
//   test("If use case throws error, the GetAllProductsController responds 500", async () => {
//     jest
//       .spyOn(getAllProductsUseCase, "execute")
//       .mockResolvedValue(
//         Result.err(new BaseError("Pretend something failed."))
//       );
//     const { req, res } = mocks.mockHandlerParams();
//     await getAllProductsController.execute(req, res);
//     expect(res.statusCode).toBe(500);
//   });
// });
