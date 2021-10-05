"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMap = void 0;
const product_1 = require("./product");
// Mapper class
class ProductMap {
    static toDTO(product) {
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
    static toDomain(productEntity) {
        const { id, title, body_html, vendor, variants } = productEntity;
        const productResult = product_1.Product.create({
            code: `${id}`,
            title,
            vendor,
            bodyHtml: body_html,
            variants: variants.map((varientEntity) => {
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
                .map((variantEntity) => {
                return variantEntity.images.map((imageEntity) => {
                    return {
                        source: imageEntity.src,
                        variantId: `${variantEntity.id}`,
                    };
                });
            })
                .flat(),
        }, id);
        return productResult.value;
    }
}
exports.ProductMap = ProductMap;
