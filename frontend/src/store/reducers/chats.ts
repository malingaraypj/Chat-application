import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "@/context/userContext";

export type Chat = {
  _id: string;
  content: string;
  sender: UserType;
  timestamp: number;
};

const initialState: { chats: Chat[]; selectedGroup: string } = {
  chats: [],
  selectedGroup: "",
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    initializeChats: (state, action) => {
      state.chats = action.payload;
    },
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
    clearChat: (state, action) => {
      state.chats = state.chats.filter(
        (chat) => chat._id !== action.payload.id
      );
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { addChat, clearChat, setSelectedGroup, initializeChats } =
  chatSlice.actions;

export default chatSlice.reducer;
