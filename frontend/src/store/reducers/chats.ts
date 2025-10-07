import { createSlice } from "@reduxjs/toolkit";

export type Chat = {
  id: string;
  message: string;
  user: string;
  timestamp: number;
};

const initialState: { chats: Chat[] } = {
  chats: [
    {
      id: "1",
      message: "Hey! How are you doing?",
      user: "Alice",
      timestamp: Date.now() - 60000,
    },
    {
      id: "2",
      message: "I'm good, thanks! Just working on a new project.",
      user: "Bob",
      timestamp: Date.now() - 30000,
    },
    {
      id: "3",
      message: "That's awesome. What kind of project?",
      user: "Alice",
      timestamp: Date.now() - 10000,
    },
    {
      id: "4",
      message: "Hey! How are you doing?",
      user: "Alice",
      timestamp: Date.now() - 60000,
    },
    {
      id: "5",
      message: "I'm good, thanks! Just working on a new project.",
      user: "Bob",
      timestamp: Date.now() - 30000,
    },
    {
      id: "6",
      message: "That's awesome. What kind of project?",
      user: "Alice",
      timestamp: Date.now() - 10000,
    },
  ],
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
  },
});

export const { addChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
