import axios from "axios";

const token = localStorage.getItem("token");

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/users`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const searchUsers = async (text: string = "") => {
  try {
    const response = await userApi.get(`/search?username=${text}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
