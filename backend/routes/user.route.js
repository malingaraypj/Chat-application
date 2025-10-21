import express from "express";
import { getAllUsers, searchUsers } from "../controller/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").all(protect).get(getAllUsers);
router.route("/search").all(protect).get(searchUsers);

export default router;
