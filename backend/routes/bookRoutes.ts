import Router from "express";
import { create, update } from "../controllers/bookController";

const router = Router();

router.post("/", create);
router.put("/:id", update);

export default router;
