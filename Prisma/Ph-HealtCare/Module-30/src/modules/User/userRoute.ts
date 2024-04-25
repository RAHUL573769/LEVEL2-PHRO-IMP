import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { verifyToken } from "../../helpers/jwtHelpers";
import config from "../../config";
import { Secret } from "jsonwebtoken";
import { auth } from "../../middlewares/auth";
import { UsersRole } from "@prisma/client";
import multer from "multer";
import path from "path";
const userRouter = express.Router();

// const auth = (...roles: string[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const token = req.headers.authorization;
//       // console.log(token);
//       if (!token) {
//         throw new Error("Yoiu are not verified");
//       }
//       const verifiedUser = verifyToken(token, "abcd");
//       console.log("Verified User", verifiedUser);

//       if (roles.length && !roles.includes(verifiedUser.role)) {
//         throw new Error("Yoiu are not verified");
//       }
//       next();
//       //   console.log(token);
//       //   console.log(roles);
//     } catch (error) {
//       next(error);
//     }
//   };
// };
//multer part
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		// cb(null, "/uploads");
// 		cb(null, path.join(process.cwd(), "uploads"));
// 	},
// 	filename: function (req, file, cb) {
// 		const uniueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// 		cb(null, file.originalname);
// 	},
// });

// const upload = multer({ storage: storage });
//multer part

import { upload } from "../../helpers/fileUploader";
import { UserValidation } from "./user.validation";

userRouter.get("/get-user", UserController.createAdminController);
userRouter.post(
	"/create-user", // auth("ADMIN", "SUPER_ADMIN"),
	// auth(UsersRole.ADMIN),
	upload.single("file"), //must send as file from postman

	(req: Request, res: Response, next: NextFunction) => {
		req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
		return UserController.createAdminController(req, res, next);
	},

	UserController.createAdminController
);
export const UserRouter = userRouter;
