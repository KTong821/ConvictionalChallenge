"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = [
    {
        id: 1000000001,
        title: "Product title",
        body_html: "<strong>Product Body HTML</strong>",
        vendor: "Product Vendor",
        product_type: "Product Type",
        created_at: "2020-02-06T12:40:15-05:00",
        handle: "product-handle",
        updated_at: "2020-02-06T12:40:16-05:00",
        published_at: "2020-02-06T12:40:15-05:00",
        tags: "tag1,tag2,tag3",
        variants: [
            {
                id: 1000000002,
                product_id: 1000000001,
                title: "Variant Title",
                sku: "Variant-SKU-1",
                position: 1,
                created_at: "2020-02-06T12:40:16-05:00",
                updated_at: "2020-02-06T12:40:16-05:00",
                taxable: true,
                barcode: null,
                grams: 0,
                weight: 1,
                weight_unit: "lb",
                price: {
                    currency_code: "USD",
                    amount: "1.00",
                },
                images: [],
            },
        ],
    },
    {
        id: 2000000001,
        title: "Product title",
        body_html: "<strong>Product Body HTML</strong>",
        vendor: "Product Vendor",
        product_type: "Product Type",
        created_at: "2020-02-06T12:40:15-05:00",
        handle: "product-handle",
        updated_at: "2020-02-06T12:40:16-05:00",
        published_at: "2020-02-06T12:40:15-05:00",
        tags: "tag1,tag2,tag3",
        variants: [
            {
                id: 2000000002,
                product_id: 2000000001,
                title: "Variant Title (small)",
                sku: "Variant-SKU-12",
                position: 1,
                created_at: "2020-02-06T12:40:16-05:00",
                updated_at: "2020-02-06T12:40:16-05:00",
                taxable: true,
                barcode: null,
                grams: 0,
                weight: 2,
                weight_unit: "lb",
                price: {
                    currency_code: "USD",
                    amount: "1.00",
                },
                images: [
                    {
                        src: "https://via.placeholder.com/250",
                    },
                ],
            },
            {
                id: 2000000003,
                product_id: 2000000001,
                title: "Variant Title (large)",
                sku: "Variant-SKU-13",
                position: 1,
                option1: "Default Title",
                created_at: "2020-02-06T12:40:16-05:00",
                updated_at: "2020-02-06T12:40:16-05:00",
                taxable: true,
                barcode: null,
                grams: 0,
                weight: 2,
                weight_unit: "lb",
                price: {
                    currency_code: "USD",
                    amount: "1.00",
                },
                images: [
                    {
                        src: "https://via.placeholder.com/150",
                    },
                    {
                        src: "https://via.placeholder.com/350",
                    },
                ],
            },
        ],
    },
];
