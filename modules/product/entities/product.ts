import { BaseEntity, Ok, BaseError } from "../../../shared";
import { Variant, VariantDTO } from "./variant";
import { Image, ImageDTO } from "./image"

//Product domain interface definition
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

export class Product extends BaseEntity<ProductProps> {
  public static create(
    props: ProductProps,
    id: string
  ): Ok<Product, BaseError> {
    const product = new Product(
      {
        ...props,
      },
      id
    );
    return new Ok(product);
  }

  private constructor(props: ProductProps, id: string) {
    super(props, id);
  }

  get code(): string {
    return this.props.code;
  }

  get title(): string {
    return this.props.title;
  }

  get vendor(): string {
    return this.props.vendor;
  }

  get bodyHtml(): string {
    return this.props.bodyHtml;
  }

  get variants(): Array<Variant> {
    return this.props.variants;
  }

  get images(): Array<Image> {
    return this.props.images
  }
}
