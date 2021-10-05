import { Image } from './../../entities/image';
import { Variant } from './../../entities/variant';
declare type VariantDTO = Variant;
declare type ImageDTO = Image;
export interface ProductDTO {
    code: string;
    title: string;
    vendor: string;
    bodyHtml: string;
    variants: Array<VariantDTO>;
    images: Array<ImageDTO>;
}
export {};
