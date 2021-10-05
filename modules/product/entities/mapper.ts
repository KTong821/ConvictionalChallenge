import { Product, ProductDTO } from "./product";

// Mapper class
export class ProductMap {
  public static toDTO(product: Product): ProductDTO {
    const { code, title, vendor, bodyHtml, variants, images } = product;
    return {
      code,
      title,
      vendor,
      bodyHtml,
      variants,
      images,
    };
  }

  public static toDomain(productEntity: any): Product {
    const { id, title, body_html, vendor, variants } = productEntity;
    const productResult = Product.create(
      {
        code: `${id}`,
        title,
        vendor,
        bodyHtml: body_html,
        variants: variants.map((varientEntity: any) => {
          const { id, title, sku, weight, weight_unit } = varientEntity;

          // inventory unknown, dummy value
          const inventory_quantity = 1;
          return {
            id: `${id}`,
            title,
            sku,
            available: inventory_quantity > 0,
            inventory_quantity,
            weight: {
              value: weight,
              unit: weight_unit,
            },
          };
        }),
        images: variants
          .map((variantEntity: any) => {
            return variantEntity.images.map((imageEntity: any) => {
              return {
                source: imageEntity.src,
                variantId: `${variantEntity.id}`,
              };
            });
          })
          .flat(),
      },
      id
    );
    return productResult.value;
  }

  //toPersistence
}
