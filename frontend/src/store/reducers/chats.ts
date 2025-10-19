import { createSlice } from "@reduxjs/toolkit";

export type Chat = {
  id: string;
  message: string;
  user: string;
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
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
    clearChat: (state, action) => {
      state.chats = state.chats.filter((chat) => chat.id !== action.payload.id);
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { addChat, clearChat, setSelectedGroup } = chatSlice.actions;

export default chatSlice.reducer;
