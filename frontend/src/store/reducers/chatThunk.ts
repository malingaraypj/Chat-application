import { receiveMessage } from "@/api/chats.api";
import { initializeChats } from "@/store/reducers/chats";
import type { AppDispatch } from "../store";

export const getMessages = (roomId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await receiveMessage(roomId);
      console.log("Received messages:", data.data);
      if (data.data) {
        dispatch(initializeChats(data.data));
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
};
