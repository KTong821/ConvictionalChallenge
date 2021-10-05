import express from "express";

// BaseController with common HTTP methods
export abstract class BaseController {
  public abstract execute<Res extends express.Response>(
    req: express.Request,
    res: Res
  ): Promise<Res>;

  public ok<Res extends express.Response, T>(res: Res, dto?: T): Res {
    if (dto) {
      res.type("application/json");
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public fail<Res extends express.Response>(
    res: Res,
    error: Error | string
  ): Res {
    console.log(error);
    return res.status(500).json({
      message: error.toString(),
    });
  }

  public static jsonResponse<Res extends express.Response>(
    res: Res,
    code: number,
    message: string
  ): Res {
    return res.status(code).json({ message });
  }

  public clientError<Res extends express.Response>(
    res: Res,
    message: string = "Unauthorized"
  ): Res {
    return BaseController.jsonResponse(res, 400, message);
  }

  public notFound<Res extends express.Response>(
    res: Res,
    message: string = "Not found"
  ): Res {
    return BaseController.jsonResponse(res, 404, message);
  }
}
