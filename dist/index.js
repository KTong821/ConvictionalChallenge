"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const setup_1 = require("./setup");
const convictional = (port) => __awaiter(void 0, void 0, void 0, function* () {
    const repos = yield setup_1.db.setupMongoRepos();
    const { controllers } = setup_1.app.setupApplication(repos);
    const { webServer } = setup_1.http.setup(controllers);
    webServer.listen(port, () => {
        console.log(`Convictional API server running on http://localhost:${port}/`);
    });
});
const port = "3000";
convictional(port);
