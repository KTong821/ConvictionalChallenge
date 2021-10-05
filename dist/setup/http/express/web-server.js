"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSetup = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverSetup = (router) => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use((0, cors_1.default)());
    server.use('/v0', router);
    server.use((_req, res) => res.status(404).json({ message: "No route found" }));
    return server;
};
exports.serverSetup = serverSetup;
