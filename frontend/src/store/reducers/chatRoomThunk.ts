import { getMyGroup, getMyPrivateChats } from "@/api/chats.api";
import { loadChatRooms, loadPrivateChatRooms } from "@/store/reducers/chatRoom";
import type { Dispatch } from "@reduxjs/toolkit";

export const loadChatRoomsThunk = () => (dispatch: Dispatch) => {
  try {
    getMyGroup().then((res) => {
      dispatch(loadChatRooms(res.data));
    });
    getMyPrivateChats().then((res) => {
      dispatch(loadPrivateChatRooms(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};
