import { Product, ProductDTO } from "./product";
export declare class ProductMap {
    static toDTO(product: Product): ProductDTO;
    static toDomain(productEntity: any): Product;
}
