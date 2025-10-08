import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: null,
    },
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
