import axios from "axios";

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
