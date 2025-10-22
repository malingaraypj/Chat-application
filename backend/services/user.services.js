import ChatRoom from "../models/ChatRoom.js";

export const myExistingPrivateConnections = async (userId) => {
  const connections = await ChatRoom.aggregate([
    {
      $match: {
        participants: { $in: [userId] },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "participants",
        foreignField: "_id",
        as: "participants",
      },
    },
    {
      $unwind: "$participants",
    },
    {
      $match: {
        "participants._id": { $ne: userId },
      },
    },
    {
      $group: {
        _id: "$_id",
        participants: { $push: "$participants" },
      },
    },
  ]);

  return connections;
};
