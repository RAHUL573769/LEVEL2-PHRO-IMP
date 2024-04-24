import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwtHelpers";
import { ApiError } from "../errors/ApiError";

export const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;
      // console.log(token);
      if (!token) {
        // throw new Error("Yoiu are not verified");
        throw new ApiError(500, "You  are Unauthorized");
      }
      const verifiedUser = verifyToken(token, "abcd");
      console.log("Verified User", verifiedUser);
      //for password change
      req.user = verifiedUser;
      //end for password change
      if (roles.length && !roles.includes(verifiedUser.role)) {
        // throw new Error("Yoiu are not verified");
        throw new ApiError(500, "You  are Unauthorized");
      }
      next();
      //   console.log(token);
      //   console.log(roles);
    } catch (error) {
      next(error);
    }
  };
};
