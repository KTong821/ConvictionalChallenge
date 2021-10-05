export declare const data: {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    tags: string;
    variants: ({
        id: number;
        product_id: number;
        title: string;
        sku: string;
        position: number;
        created_at: string;
        updated_at: string;
        taxable: boolean;
        barcode: null;
        grams: number;
        weight: number;
        weight_unit: string;
        price: {
            currency_code: string;
            amount: string;
        };
        images: {
            src: string;
        }[];
        option1?: undefined;
    } | {
        id: number;
        product_id: number;
        title: string;
        sku: string;
        position: number;
        option1: string;
        created_at: string;
        updated_at: string;
        taxable: boolean;
        barcode: null;
        grams: number;
        weight: number;
        weight_unit: string;
        price: {
            currency_code: string;
            amount: string;
        };
        images: {
            src: string;
        }[];
    })[];
}[];
