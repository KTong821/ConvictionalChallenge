export declare type Variant = {
    id: string;
    title: string;
    sku: string;
    available: boolean;
    inventory_quantity: number;
    weight: {
        value: number;
        unit: string;
    };
};
export declare type VariantDTO = Variant;
