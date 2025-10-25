import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chats";
import chatRoomReducer from "./reducers/chatRoom";

export const store = configureStore({
  reducer: { chat: chatReducer, chatRoom: chatRoomReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
