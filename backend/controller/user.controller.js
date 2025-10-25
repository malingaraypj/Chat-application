import mongoose from "mongoose";
import User from "../models/User.js";
import ChatRoom from "../models/ChatRoom.js";

import catchAsync from "../utils/catchAsync.js";
import { myExistingPrivateConnections } from "../services/user.services.js";

export const getAllUsers = catchAsync(async (req, res, next) => {
  const search = req.query.search || "";
  const users = await User.find({
    $or: [
      { username: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ],
  });

  res.status(200).json({ success: true, length: users.length, data: users });
});

export const getPrivateConnectionSuggestion = catchAsync(
  async (req, res, next) => {
    const userId = req.user._id;
    const search = req.query.search || "";

    const connections = await myExistingPrivateConnections(userId);

    const users = await User.find({
      _id: {
        $nin: connections.flatMap((conn) =>
          conn.participants.map((p) => p._id)
        ),
      },
      $and: [{ _id: { $ne: userId } }],

      $or: [
        { username: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    });

    res.status(200).json({ success: true, length: users.length, data: users });
  }
);

export const searchUsers = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { username } = req.query;

  const result = await ChatRoom.aggregate([
    // Find chat rooms where the current user is a participant
    {
      $match: {
        participants: { $in: [userId] },
      },
    },
    // Lookup participants' details
    {
      $lookup: {
        from: "users",
        localField: "participants",
        foreignField: "_id",
        as: "participants",
      },
    },

    // Flatten participants array to match on usernames
    { $unwind: "$participants" },
    // Exclude the logged-in user and filter by username (case-insensitive)
    {
      $match: {
        "participants._id": { $ne: userId },
        "participants.username": { $regex: username, $options: "i" },
      },
    },
    {
      $group: {
        _id: "$participants._id",
        username: { $first: "$participants.username" },
        profilePicture: { $first: "$participants.profilePicture" },
        email: { $first: "$participants.email" },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    length: result.length,
    data: result,
  });
});
