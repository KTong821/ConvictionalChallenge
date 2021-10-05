"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const controllers_1 = require("./controllers");
const use_cases_1 = require("./use-cases");
const setupApplication = (repos) => {
    const useCases = (0, use_cases_1.setupUseCases)(repos);
    const controllers = (0, controllers_1.setupControllers)(useCases);
    return {
        useCases,
        controllers,
    };
};
exports.setupApplication = setupApplication;
