import { Repos } from './types';
import { MongoProductRepo } from './../../modules/product/infra/repos/mongo-product-repo';

interface MongoRepos extends Repos{
  product: MongoProductRepo
}

const setupMongoRepos = (): MongoRepos => {
  return {
    product: new MongoProductRepo(),
  }
}

export { MongoRepos, setupMongoRepos };
 