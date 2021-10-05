"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
}
exports.BaseEntity = BaseEntity;
