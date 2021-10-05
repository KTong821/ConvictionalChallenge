"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMongoRepos = void 0;
const mongo_product_repo_1 = require("./../../modules/product/infra/repos/mongo-product-repo");
const setupMongoRepos = () => {
    return {
        product: new mongo_product_repo_1.MongoProductRepo(),
    };
};
exports.setupMongoRepos = setupMongoRepos;
