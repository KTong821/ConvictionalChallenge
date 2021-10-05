import { Repos } from "../database";
import { Controllers } from "./controllers";
import { UseCases } from "./use-cases";
export interface Application {
    useCases: UseCases;
    controllers: Controllers;
}
export declare const setupApplication: (repos: Repos) => Application;
