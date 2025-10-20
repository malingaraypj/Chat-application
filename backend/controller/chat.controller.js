import { getAll, getOne } from "../Factory/handleFactory.js";
import ChatRoom from "../models/ChatRoom.js";
import Message from "../models/Message.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

export const createChatConnection = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { member } = req.body;

  if (!member) throw new AppError("Member ID is required", 400);

  if (member.toString() === userId) {
    throw new AppError(
      "You cannot create a chat connection with yourself",
      400
    );
  }

  // check if chat already exists between the two users
  const existingChat = await ChatRoom.exists({
    isGroupChat: false,
    participants: { $all: [userId, member], $size: 2 },
  });

  if (existingChat) {
    throw new AppError("Chat connection already exists", 400);
  }

  const newChatConnection = await ChatRoom.create({
    isGroupChat: false,
    participants: [userId, member],
    createdBy: userId,
  });

  res.status(201).json({
    success: true,
    data: newChatConnection,
    message: "Chat connection created successfully",
  });
});

export const getAllmyChatConnections = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const connections = await ChatRoom.find({
    isGroupChat: false,
    participants: userId,
  });

  res.status(200).json({
    status: "success",
    results: connections.length,
    data: connections,
  });
});

export const createGroup = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { name, members } = req.body;

  if (!name) {
    throw new AppError("Group chat name is required", 400);
  }
  if (!members || members.length < 0)
    throw new AppError(
      "At least one member is required to create a group chat",
      400
    );

  if (members.includes(userId)) {
    members = members.filter((id) => id !== userId);
  }

  members.push(userId);

  const newGroupChat = await ChatRoom.create({
    name,
    isGroupChat: true,
    participants: members,
    admin: [userId],
    createdBy: userId,
  });

  res.status(201).json({
    success: true,
    data: newGroupChat,
    message: "Group chat created successfully",
  });
});

export const getAllMyGroup = (req, res, next) => {
  const userId = req.user._id;
  const middleware = getAll(ChatRoom, {
    filter: {
      isGroupChat: true,
      participants: userId,
    },
  });

  return middleware(req, res, next);
};

export const getOneGroup = getOne(ChatRoom, {
  populate: [
    {
      path: "participants",
      ref: "User",
    },
    {
      path: "admin",
      ref: "User",
    },
  ],
});

export const getAllMessageOfGroup = catchAsync(async (req, res, next) => {
  const middleware = getAll(Message, {
    filter: {
      chatRoomId: req.params.id,
    },
    populate: [
      {
        path: "sender",
        ref: "User",
      },
    ],
  });

  return middleware(req, res, next);
});
