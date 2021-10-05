"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    ok(res, dto) {
        if (dto) {
            res.type("application/json");
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    }
    fail(res, error) {
        console.log(error);
        return res.status(500).json({
            message: error.toString(),
        });
    }
    static jsonResponse(res, code, message) {
        return res.status(code).json({ message });
    }
    clientError(res, message = "Unauthorized") {
        return BaseController.jsonResponse(res, 400, message);
    }
    notFound(res, message = "Not found") {
        return BaseController.jsonResponse(res, 404, message);
    }
}
exports.BaseController = BaseController;
