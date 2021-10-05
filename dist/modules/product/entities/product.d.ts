import { BaseEntity, Ok, BaseError } from "../../../shared";
import { Variant, VariantDTO } from "./variant";
import { Image, ImageDTO } from "./image";
export interface ProductDTO {
    code: string;
    title: string;
    vendor: string;
    bodyHtml: string;
    variants: Array<VariantDTO>;
    images: Array<ImageDTO>;
}
export interface ProductProps {
    code: string;
    title: string;
    vendor: string;
    bodyHtml: string;
    variants: Array<Variant>;
    images: Array<Image>;
}
export declare class Product extends BaseEntity<ProductProps> {
    static create(props: ProductProps, id: string): Ok<Product, BaseError>;
    private constructor();
    get code(): string;
    get title(): string;
    get vendor(): string;
    get bodyHtml(): string;
    get variants(): Array<Variant>;
    get images(): Array<Image>;
}
