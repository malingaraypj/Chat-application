import type { UserType } from "@/context/userContext";
import type { Chat } from "@/store/reducers/chats";

export type ChatRoom = {
  _id: string;
  name: string;
  isGroupChat: boolean;
  participants: UserType[];
  admin: UserType;
  createdBy: UserType;
  createdAt: number;
  updatedAt: number;
  messages: Chat[];
};
