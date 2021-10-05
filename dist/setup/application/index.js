"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = exports.setupControllers = exports.setupUseCases = void 0;
var use_cases_1 = require("./use-cases");
Object.defineProperty(exports, "setupUseCases", { enumerable: true, get: function () { return use_cases_1.setupUseCases; } });
var controllers_1 = require("./controllers");
Object.defineProperty(exports, "setupControllers", { enumerable: true, get: function () { return controllers_1.setupControllers; } });
var application_1 = require("./application");
Object.defineProperty(exports, "setupApplication", { enumerable: true, get: function () { return application_1.setupApplication; } });
