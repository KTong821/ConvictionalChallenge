"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const shared_1 = require("../../../shared");
class Product extends shared_1.BaseEntity {
    static create(props, id) {
        const product = new Product(Object.assign({}, props), id);
        return new shared_1.Ok(product);
    }
    constructor(props, id) {
        super(props, id);
    }
    get code() {
        return this.props.code;
    }
    get title() {
        return this.props.title;
    }
    get vendor() {
        return this.props.vendor;
    }
    get bodyHtml() {
        return this.props.bodyHtml;
    }
    get variants() {
        return this.props.variants;
    }
    get images() {
        return this.props.images;
    }
}
exports.Product = Product;
