import express from "express";
import { CatController } from "./Cat.controller";
const router = express.Router();

router.post("/create-cat", CatController.createCatController);

router.get("/get-cat", CatController.getCatController);
export const catRoutes = router;
