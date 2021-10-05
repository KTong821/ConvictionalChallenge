// import { Result, BaseError } from './../../../../../shared/';
// // import { mocks } from "../../../../../../../test-utils";
// import { Product } from "../../../entities/product";

// // jest.mock("../../../../repos/implementations/mock-product-repo");

// describe("GetAllProductsUseCase", () => {
//   const ids: Array<string> = [1, 2, 3].map(String);
//   const mockProducts: Array<Product> = ids.map(mocks.mockProduct);
//   const mockProductDTOs: Array<ProductDTO> = ids.map(mocks.mockProductDTO);
//   const { productRepo, getAllProductsUseCase } = mocks.mockGetAllProducts();

//   test("When executed, should return all products and an Ok", async () => {
//     jest.spyOn(productRepo, "getAllProducts").mockResolvedValue(Result.ok(mockProducts));

//     const getAllProductsResult = await getAllProductsUseCase.execute();

//     expect(productRepo.getAllProducts).toBeCalled();
//     expect(getAllProductsResult.isOk()).toBe(true);
//     if (getAllProductsResult.isOk()) {
//       expect(getAllProductsResult.value.length).toBe(ids.length);
//       for (const mockProductDTO of mockProductDTOs) {
//         expect(getAllProductsResult.value).toContainEqual(mockProductDTO);
//       }
//     }
//   });

//   test("When repo throws error, should return BaseError", async () => {
//     jest
//       .spyOn(productRepo, "getAllProducts")
//       .mockResolvedValue(
//         Result.err(new BaseError("Pretend something failed."))
//       );

//     const getAllProductsResult = await getAllProductsUseCase.execute();

//     expect(productRepo.getAllProducts).toBeCalled();
//     expect(getAllProductsResult.isErr()).toBe(true);
//   });
// });
