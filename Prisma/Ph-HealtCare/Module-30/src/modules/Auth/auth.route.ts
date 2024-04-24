import express from "express";
import { AuthController } from "./auth.controller";
import { UsersRole } from "@prisma/client";
import { auth } from "../../middlewares/auth";

const router = express.Router();
router.post("/login", AuthController.loginUser);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/forgot-password", AuthController.forgotPasswordController);
router.post(
  "/change-password",
  auth(
    UsersRole.ADMIN,
    UsersRole.DOCTOR,
    UsersRole.PATIENT,
    UsersRole.SUPER_ADMIN
  ),
  AuthController.changePasswordController
);
export const AuthRouter = router;
