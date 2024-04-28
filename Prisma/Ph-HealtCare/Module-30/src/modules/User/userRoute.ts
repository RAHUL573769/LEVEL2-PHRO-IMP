import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";

import multer from "multer";
import path from "path";
// import { upload } from "../../helpers/fileUploader";
import { UserValidation } from "./user.validation";
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
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(process.cwd(), "uploads"));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},
});

const upload = multer({ storage: storage });

userRouter.get("/get-user", UserController.createAdminController);
userRouter.post(
	"/create-user", // auth("ADMIN", "SUPER_ADMIN"),
	// auth(UsersRole.ADMIN),
	upload.single("file"), //must send as file from postman

	(req: Request, res: Response, next: NextFunction) => {
		req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
		return UserController.createAdminController(req, res, next);
	}
);
export const UserRouter = userRouter;
