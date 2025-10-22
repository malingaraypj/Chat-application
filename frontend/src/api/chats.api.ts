import axios from "axios";
import socket from "@/socket";

const token = localStorage.getItem("token");

const chatApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/chats`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getMyGroup = async () => {
  try {
    const response = await chatApi.get("/group");
    return response.data;
  } catch (error) {
    console.error("Error fetching my groups:", error);
  }
};

export const getMyPrivateChats = async () => {
  try {
    const response = await chatApi.get("/private-connection");
    return response.data;
  } catch (error) {
    console.error("Error fetching my private chats:", error);
  }
};

export const sendMesage = (chat: {
  roomId: string;
  senderId: string;
  content: string;
}) => {
  try {
    socket.emit("send-message", chat);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const receiveMessage = async (roomId: string) => {
  try {
    const response = await chatApi.get(`/group/${roomId}/messages`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

export const createNewChat = async (chat: {
  groupName: string;
  users: string[];
}) => {
  try {
    const response = await chatApi.post("/group", {
      name: chat.groupName,
      members: chat.users,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating new chat:", error);
  }
};

export const createPrivateChat = async (userId: string) => {
  console.log(userId, "inside func");

  try {
    const response = await chatApi.post("/private-connection", {
      member: userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating new private chat:", error);
  }
};
