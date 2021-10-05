/// <reference types="express" />
import { Controllers } from '../../application';
export declare const setup: (controllers: Controllers) => {
    apiRouter: import("express").Router;
    webServer: import("express").Express;
};
