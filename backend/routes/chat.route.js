import express from "express";
import {
  createChatConnection,
  createGroup,
  getAllmyChatConnections,
  getAllMyGroup,
  getOneGroup,
  getAllMessageOfGroup,
} from "../controller/chat.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router
  .route("/private-connection")
  .post(createChatConnection)
  .get(getAllmyChatConnections);

router.route("/group").post(createGroup).get(getAllMyGroup);
router.route("/group/:id").get(getOneGroup);

// handling messages
router.route("/group/:id/messages").get(getAllMessageOfGroup);

export default router;
