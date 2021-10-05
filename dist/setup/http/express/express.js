"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const routing_1 = require("./routing");
const web_server_1 = require("./web-server");
const setup = (controllers) => {
    const apiRouter = (0, routing_1.routerSetup)(controllers);
    const webServer = (0, web_server_1.serverSetup)(apiRouter);
    return {
        apiRouter,
        webServer,
    };
};
exports.setup = setup;
