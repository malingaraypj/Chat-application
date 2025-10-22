import type { ChatRoom } from "@/TypeModules/ChatRoom";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { chatRooms: ChatRoom[] } = {
  chatRooms: [],
};

const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    addChatRoom: (state, action: PayloadAction<ChatRoom>) => {
      state.chatRooms.push(action.payload);
    },
    removeChatRoom: (state, action: PayloadAction<string>) => {
      state.chatRooms = state.chatRooms.filter(
        (chatRoom) => chatRoom._id !== action.payload
      );
    },
  },
});

export const { addChatRoom, removeChatRoom } = chatRoomSlice.actions;
export default chatRoomSlice.reducer;
