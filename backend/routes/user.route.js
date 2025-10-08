import express from "express";
import { getAllUsers } from "../controller/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").all(protect).get(getAllUsers);

export default router;
