import { Repos } from './types';
import { MongoProductRepo } from './../../modules/product/infra/repos/mongo-product-repo';
interface MongoRepos extends Repos {
    product: MongoProductRepo;
}
declare const setupMongoRepos: () => MongoRepos;
export { MongoRepos, setupMongoRepos };
