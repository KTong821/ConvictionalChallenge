import express from "express";
export declare abstract class BaseController {
    abstract execute<Res extends express.Response>(req: express.Request, res: Res): Promise<Res>;
    ok<Res extends express.Response, T>(res: Res, dto?: T): Res;
    fail<Res extends express.Response>(res: Res, error: Error | string): Res;
    static jsonResponse<Res extends express.Response>(res: Res, code: number, message: string): Res;
    clientError<Res extends express.Response>(res: Res, message?: string): Res;
    notFound<Res extends express.Response>(res: Res, message?: string): Res;
}
