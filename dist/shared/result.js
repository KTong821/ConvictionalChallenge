"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.Err = exports.Ok = void 0;
class Ok {
    constructor(value) {
        this.value = value;
    }
    isOk() {
        return true;
    }
    isErr() {
        return false;
    }
}
exports.Ok = Ok;
class Err {
    constructor(error) {
        this.error = error;
    }
    isOk() {
        return false;
    }
    isErr() {
        return true;
    }
}
exports.Err = Err;
var Result;
(function (Result) {
    Result.ok = (value) => new Ok(value);
    Result.err = (error) => new Err(error);
})(Result = exports.Result || (exports.Result = {}));
