import type { groupType } from "@/TypeModules/Accounts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { chatGroups: groupType[]; privateChatRooms: groupType[] } =
  {
    chatGroups: [],
    privateChatRooms: [],
  };

const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    loadChatRooms: (state, action: PayloadAction<groupType[]>) => {
      state.chatGroups = action.payload;
    },
    loadPrivateChatRooms: (state, action: PayloadAction<groupType[]>) => {
      state.privateChatRooms = action.payload;
    },
    addChatRoom: (state, action: PayloadAction<groupType>) => {
      state.chatGroups.push(action.payload);
      state.privateChatRooms.push(action.payload);
    },
    removeChatGroup: (state, action: PayloadAction<string>) => {
      state.chatGroups = state.chatGroups.filter(
        (chatRoom) => chatRoom._id !== action.payload
      );
    },
    addPrivateChatRoom: (state, action: PayloadAction<groupType>) => {
      state.privateChatRooms.push(action.payload);
    },
    removePrivateChatRoom: (state, action: PayloadAction<string>) => {
      state.privateChatRooms = state.privateChatRooms.filter(
        (chatRoom) => chatRoom._id !== action.payload
      );
    },
  },
});

export const {
  addChatRoom,
  removeChatGroup,
  loadChatRooms,
  loadPrivateChatRooms,
  addPrivateChatRoom,
  removePrivateChatRoom,
} = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
