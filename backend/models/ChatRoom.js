import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema(
  {
    // For group chats, this is the name of the group
    name: {
      type: String,
      trim: true,
      default: null,
    },
    // Indicates if the chat room is a group chat or a 1-on-1 chat
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    admin: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// Index to quickly find a 1-on-1 chat between two users
chatRoomSchema.index({ participants: 1 });

chatRoomSchema.virtual("messages", {
  ref: "Message",
  localField: "_id",
  foreignField: "chatRoomId",
});

export default mongoose.model("ChatRoom", chatRoomSchema);
