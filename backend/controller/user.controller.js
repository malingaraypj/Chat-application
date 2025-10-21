import mongoose from "mongoose";
import User from "../models/User.js";
import ChatRoom from "../models/ChatRoom.js";

import catchAsync from "../utils/catchAsync.js";

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, length: users.length, data: users });
});

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
