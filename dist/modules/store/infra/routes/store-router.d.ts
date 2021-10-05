import { GetStoreInventoryController } from "./../../application/";
import { Router } from "express";
declare class StoreRouter {
    static using(getStoreInventoryController: GetStoreInventoryController): Router;
}
export { StoreRouter };
